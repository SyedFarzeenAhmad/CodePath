const http = require('http');
const url = require('url');

// Parse request body
async function parseBody(req) {
    return new Promise((resolve, reject) => {
    // Implement body parsing
    try {
        resolve(url.parse(req, true));
    }
    catch (err) {
        reject(err);
    }
  });
}

// Create server
const server = http.createServer(async (req, res) => {
  // Implement request handling
  const url = req.url;
  const urlObj = await parseBody(url);
  console.log(urlObj.pathname);
  if (urlObj.path === '/') {
    res.end()
  }
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});