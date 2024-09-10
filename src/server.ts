import app from "./app";
import pool from "./database/config";

(() => {
  pool
    .initialize()
    .then(() => console.log("Pool initialized"))
    .catch((error) => console.error("Error al inicializar la conexión:", error));

  app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`);
  });
})();
