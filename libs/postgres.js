const {Client} = require('pg');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'keiner',
    password: 'admin123',
    database: 'tienda_node'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
