// ! Imports
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: parâmetros nomeados enviados na rota após o "?" (Filtros, Paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, MSSQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: Select * from users
 * Query Builder: table('users').select('*').where() |knexjs|
 */
