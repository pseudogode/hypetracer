import convict from 'convict';
import 'dotenv/config';

export const config = convict({
  db: {
    host: {
      doc: 'The database hostname',
      format: String,
      default: 'localhost',
      env: 'HT_DB_HOST'
    },
    port: {
      doc: 'The database port',
      format: 'port',
      default: 5432,
      env: 'HT_DB_PORT'
    },
    name: {
      doc: 'The database name',      
      format: String,
      default: 'hypetracer_db',
      env: 'HT_DB_NAME'
    },
    user: {
      doc: 'The database user',      
      format: String,
      default: undefined,
      env: 'HT_DB_USER'
    },
    password: {
      doc: 'The database password',
      format: String,
      default: undefined,
      env: 'HT_DB_PASSWORD'
    }
  },
  server: {
    port: {
      doc: 'The server port',      
      format: String,
      default: 3000,
      env: 'HT_SERVER_PORT',
    },
  },
}).validate();
