const html = require("html-template-tag");
const express = require("express");
const morgan = require("morgan");
const app = express();
const { db } = require("./models");
app.use("/wiki", require("./routes/wiki"));

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ exdended: false }));

app.use(express.json());

app.get("/", (req, res) => {
  const html = `<!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/stylesheet/style.css">
      </head>
        <body>
          <p>
            Bonjour!
          </p>
        </body>
    </html>`;
  res.send(html);
});

const PORT = 3000;

const init = async () => {
  // await db.sync({ force: true });
  await db.sync();
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

db.authenticate().then(() => {
  console.log("connected to the database");
});

init();

module.exports = app;
