import { Application } from 'https://deno.land/x/oak/mod.ts'

const app = new Application()

app.use(({ response }) => {
  response.body = {
    dino: Deno.env.get('DINO') || 'Hello, World!',
  }
})

await app.listen({
  port: Number(Deno.env.get('PORT') || '8080'),
})
