import http from 'node:http';
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const port = 5000;

const requestListener = async (req, res) => {
    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                const guest = JSON.parse(body);
                const fileName = join(process.cwd(), `${guest.name}.json`);

                await writeFile(fileName, JSON.stringify(guest, null, 2)); 

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(guest));
            } catch (error) {
                console.error('Error:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'server failed' }));
            }
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
};

const server = http.createServer(requestListener);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});