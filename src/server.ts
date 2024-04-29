Bun.serve({
    port: 3000,
    fetch: (req, server) => {
        const url = new URL(req.url)
        const name = url.searchParams.get('name')
        if (name) {
            return new Response(`Hello ${name}!`)
        } else {
            return new Response("Hello World!")
        }
    }
})