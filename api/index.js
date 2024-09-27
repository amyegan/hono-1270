import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { myName } from '../utils/name.js'
import { testName } from './subdir/_test.js'

const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: `Congrats, ${ myName }! You've deployed Hono to Vercel for ${testName}` })
})

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;