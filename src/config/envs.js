const dotenv = require("dotenv");
dotenv.config();

module.exports = {
PORT: process.env.PORT || 8080,
MONGO_URL: process.env.MONGO_URL,
JWT_SECRET: process.env.JWT_SECRET || "dev_secret",
JWT_EXPIRES_IN: "24h"
};