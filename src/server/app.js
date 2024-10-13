require("dotenv").config();
const express = require("express");

const servidor = express();
servidor.use(express.json());

servidor.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}.`);
});
