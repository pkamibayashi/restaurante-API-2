module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-cfj3fjpa6gductgjt860-a.oregon-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "paulorestaurantdb"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "dQEis01M18tdEFtgmbqacDncuyb0NQ80"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
