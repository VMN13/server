const http = require("http");
const EMAIL_PATH = "/stayspaceflux_gmail_com";

function g(a, b) {
  while (b) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function l(a, b) {
  return (a / g(a, b)) * b;
}

http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://localhost:${process.env.PORT || 3000}`);
  const pathname = urlObj.pathname;
  const x = urlObj.searchParams.get("x");
  const y = urlObj.searchParams.get("y");

  if (req.method !== "GET" || pathname !== EMAIL_PATH) {
    res.writeHead(404);
    res.end("NaN");
    return;
  }

  if (!/^[1-9]\d*$/.test(x) || !/^[1-9]\d*$/.test(y)) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("NaN");
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(l(BigInt(x), BigInt(y)) + "");
}).listen(process.env.PORT || 3000);