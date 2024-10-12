const mongoose = require("mongoose");
require("dotenv").config();

main().catch((err) => console.log(err));

async function main() {
  mongoose.connect(process.env.DATABASE_URL);
}
