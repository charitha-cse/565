import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>HELLO WORLD</title>
            </head>
            <body>
                <h1>WELCOME TO EXPRESS.JS</h1>
                <script>
                    console.log('hello world');
                </script>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
