const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const goodsRouter = require("./routes/goods");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//处理静态资源
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/goods", goodsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//跨域

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行res.header( ' Access-Control-Allow-Headers ', 'Content-Type ' );
  res.header("Access-Control-Allow-Headers", "Content-Type ");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type ", "application/json; charset=utf-8");
  next();
});

module.exports = app;
