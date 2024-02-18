const express = require("express");
const portfoliosRouter = require("./routes/portfolios");

const server = express();
const PORT = parseInt(process.env.PORT, 10) || 3001;

server.listen(PORT, (err) => {
  if(err) console.log(err)
  console.log(`Server is listening on port ${PORT}`);
});

server.use("/api/v1", portfoliosRouter);
