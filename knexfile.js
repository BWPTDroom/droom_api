module.exports = {
  // Development/Prod Configuration
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      filename: './database/droom.db3'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  // Testing configuration
  // Allows npx knex migrate:latest --env=testing (automatically sets cross-env using cross-env in test script)
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
