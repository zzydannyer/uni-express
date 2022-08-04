const express = require("express");
const router = express.Router();
const { queryUserName, queryUserPwd, insertData } = require("../db/user");
const sql = require("../db/sql");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

// 登录
router.post("/login", (req, res, next) => {
  let params = {
    userName: req.body.userName,
    userPwd: req.body.userPwd,
  };
  sql.query(queryUserName(params), (err, results) => {
    console.log(results);
    if (results.length) {
      sql.query(queryUserPwd(params), (e, result) => {
        if (result.length) {
          res.send({
            code: 0,
            data: {
              success: true,
              msg: "登陆成功",
              data: result[0],
            },
          });
        } else {
          res.send({
            code: 0,
            data: {
              success: false,
              msg: "密码错误",
            },
          });
        }
      });
    } else {
      res.send({
        code: 0,
        data: {
          success: false,
          msg: "用户名或手机号不存在",
        },
      });
    }
  });
});
//第三方登录 openid
router.post("/loginother", (req, res, next) => {
  let params = {
    provider: req.body.provider,
    openid: req.body.openid,
    nickName: req.body.nickName,
    avatarUrl: req.body.avatarUrl,
  };

  sql.query(queryUserName(params), (err, results) => {
    // console.log(results);
    if (results.length) {
      sql.query(queryUserName(params), (e, result) => {
        res.send({
          code: 0,
          data: result[0],
        });
      });
    } else {
      sql.query(insertData(params), (err, results) => {
        sql.query(queryUserName(params), (e, result) => {
          res.send({
            code: 0,
            data: result[0],
          });
        });
      });
    }
  });
});

//注册
router.post("/registered", (req, res, next) => {
  let params = {
    userName: req.body.phone,
  };
  sql.query(queryUserName(params), (err, results) => {
    if (results.length) {
      res.send({
        data: {
          success: false,
          msg: "手机号已存在",
        },
      });
    } else {
      res.send({
        data: {
          success: true,
        },
      });
    }
  });
});

//发送验证码
router.post("/code", (req, res, next) => {
  let params = {
    userName: req.body.phone,
  };
  /* ...发送短信sdk */
  res.send({
    data: {
      success: true,
      code: "666",
    },
  });
});
//添加用户
router.post("/addUser", (req, res, next) => {
  let params = {
    userName: req.body.userName,
    userCode: req.body.code,
  };

  if (params.userCode === "666") {
    sql.query(insertData(params), (err, results) => {
      sql.query(queryUserName(params), (e, result) => {
        res.send({
          data: {
            success: true,
            msg: "注册成功",
            data: result[0],
          },
        });
      });
    });
  }
});
module.exports = router;
