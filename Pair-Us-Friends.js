var mysql = require('mysql');
var http = require('http');

server = http.createServer((req, res) => {
  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  res.on('error', (err) => {
    console.error(err);
  });
  if (req.method === 'POST') {
    req.pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }


}).listen(8080);



// mysql server setup below
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
