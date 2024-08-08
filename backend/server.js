const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  try {
    console.log("server is runnig Port : ", process.env.PORT);
  } catch (error) {
    console.log(error.message);
  }
});
