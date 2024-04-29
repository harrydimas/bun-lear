const server = Bun.serve({
    port: process.env.SERVER_PORT,
    fetch(request) {
        return new Response("Welcome to Bun!");
    },
});

console.log(`Listening on localhost:${server.port}`);