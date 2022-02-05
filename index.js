import http from 'http'
import fs from 'fs'

const port = 3000

http.createServer((req, res) => {
  const page = (halaman) => {
    return (
      fs.readFile(`./Assets/${halaman}.html`, (err, data) => {
        res.end(data)
      })
    )
  }

  switch (req.url) {
    case "/":
      page('home')
      break;
    case "/visi-misi":
      page('visi-misi')
      break;
    case "/sambutan":
      page('sambutan')
      break;
    case "/blog":
      page('blog')
      break;
    case "/perpus":
      page('perpus')
      break;
    case "/matematika":
      fs.readFile('./Assets/matematika kls9.pdf', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'application/pdf' });
        res.write(data);
        res.end()
      })
      break;
    default:
      res.end('404 Not found')
      break;
  }
}).listen(port);

console.log(`server running on localhost:${port}`)
