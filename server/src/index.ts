
import Knex from 'knex'
import { dbConfig } from './knexfile'
import { Model } from 'objection'
import express, { json } from 'express'
import { config } from './config'

export const knex = Knex(dbConfig.development);
Model.knex(knex);

const app = express();
const { port } = config.get('server');

app.use(json());

app.listen(port);
console.log(`Server is listening on port ${port}`);