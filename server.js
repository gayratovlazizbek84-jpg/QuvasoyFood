const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // CORS sarlavhalari
  res.setHeader('Access-Control-Allow-Origin', '*');

  let safePath = decodeURI(req.url.split('?')[0]);
  if (safePath === '/' || safePath === '') {
    safePath = '/dashboard.html';
  }

  const filePath = path.join(__dirname, safePath);

  // Xavfsizlik: joriy papkadan tashqariga chiqishni oldini olish
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Taqiqlangan (Forbidden)');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Sahifa topilmadi');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

function startServer(port) {
  const srv = server.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`\n===========================================`);
    console.log(`🍣 Tanuki Family Server ishga tushdi:`);
    console.log(`   👉 Dashboard:    ${url}`);
    console.log(`   👉 Kirish:       ${url}/login.html`);
    console.log(`   👉 Ro'yxatdan o'tish: ${url}/register.html`);
    console.log(`===========================================\n`);

    if (process.platform === 'win32') {
      exec(`start ${url}`);
    }
  });

  srv.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️ Port ${port} band, port ${port + 1} ga o'tilmoqda...`);
      startServer(port + 1);
    } else {
      console.error(err);
    }
  });
}

startServer(PORT);

