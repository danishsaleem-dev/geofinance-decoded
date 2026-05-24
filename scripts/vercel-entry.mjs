import server from '../dist/server/server.js'

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const host = req.headers['x-forwarded-host'] || req.headers.host
  const url = new URL(req.url, `${protocol}://${host}`)

  // Read body for non-GET requests
  let body
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const chunks = []
    for await (const chunk of req) chunks.push(chunk)
    if (chunks.length > 0) body = Buffer.concat(chunks)
  }

  // Flatten headers (Node.js can give arrays for some headers)
  const headers = {}
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined)
      headers[key] = Array.isArray(value) ? value.join(', ') : value
  }

  // Convert to Web Fetch Request and call TanStack Start server
  const request = new Request(url.toString(), { method: req.method, headers, body })
  const response = await server.fetch(request, {}, {})

  // Write response back to Node.js
  res.statusCode = response.status
  for (const [key, value] of response.headers.entries()) res.setHeader(key, value)
  res.end(Buffer.from(await response.arrayBuffer()))
}
