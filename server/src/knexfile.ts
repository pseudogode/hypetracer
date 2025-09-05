import { config } from './config';
import { knexSnakeCaseMappers } from 'objection';

const { host, port, name, user, password } = config.get('db');

export const dbConfig = {
  development: {
    client: 'pg',
    debug: false,
    connection: {
      host,
      port,
      user,
      password,
      database: name,
    },
    ...knexSnakeCaseMappers(),
  },
};
