import { mkdirSync, writeFileSync, rmSync, cpSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import * as esbuild from 'esbuild'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(root, '.vercel/output')

rmSync(OUT, { recursive: true, force: true })
mkdirSync(join(OUT, 'static'), { recursive: true })
mkdirSync(join(OUT, 'functions/ssr.func'), { recursive: true })

cpSync(join(root, 'dist/client'), join(OUT, 'static'), { recursive: true })
console.log('✓ Copied static assets')

await esbuild.build({
  entryPoints: [join(root, 'scripts/vercel-entry.mjs')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: join(OUT, 'functions/ssr.func/index.js'),
  external: ['node:*', 'cloudflare:*'],
  ignoreAnnotations: true,
  logLevel: 'warning',
})
console.log('✓ Bundled SSR Node.js function')

writeFileSync(
  join(OUT, 'functions/ssr.func/.vc-config.json'),
  JSON.stringify({ runtime: 'nodejs22.x', handler: 'index.js', launcherType: 'Nodejs' })
)

writeFileSync(
  join(OUT, 'functions/ssr.func/package.json'),
  JSON.stringify({ type: 'module' })
)

writeFileSync(
  join(OUT, 'config.json'),
  JSON.stringify({
    version: 3,
    routes: [
      { handle: 'filesystem' },
      { src: '/(.*)', dest: '/ssr' },
    ],
  })
)

console.log('✓ Vercel build output ready in .vercel/output/')
