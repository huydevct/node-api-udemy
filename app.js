const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();
const errorController = require("./controllers/error");

// app.engine(
//   "hbs",
//   engine({
//     layoutsDir: "views/layouts/",
//     defaultLayout: 'main-layout',
//     extname: "hbs",
//   })
// );
// app.set("view engine", "pug");
// app.set("view engine", ".hbs");
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRouter);

app.use(errorController.get404);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
