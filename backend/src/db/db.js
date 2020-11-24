const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'b79vmsgv5ri1yjmuzypu-mysql.services.clever-cloud.com',
  user: 'u1fhxsp9lr1rpz8i',
  password: 'sOykoyebw5ALG7ebVCTH',
  database: 'b79vmsgv5ri1yjmuzypu',
  multipleStatements: true
  });
  mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('¡Base de datos conectada!');
  }
});

module.exports = mysqlConnection;