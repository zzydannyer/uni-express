class UserModel {
  queryUserName(param) {
    if (param.userName) {
      return `select * from uni_users where userName='${param.userName}' or phone='${param.userName}'`;
    } else {
      //第三方登录
      return `select * from uni_users where provider='${param.provider}' or openid='${param.openid}'`;
    }
  }
  queryUserPwd(param) {
    return `select * from uni_users where userName='${param.userName}' or phone='${param.userName}' and userPwd='${param.userPwd}'`;
  }
  insertData(param) {
    let userName = param.userName || param.openid;
    let nickName = param.nickName || "默认昵称";
    let avatarUrl = param.avatarUrl || "http://47.100.249.122:3000/img/qq.png";
    const jwt = require("jsonwebtoken");
    let payload = { name: userName };
    let secret = "secret";
    let token = jwt.sign(payload, secret);
    return `insert into uni_users (userName,userPwd,phone,imgUrl,nickName,token,provide,openid) values ('','','${param.userName}','${avatarUrl}','${nickName}','${token}','${param.provide}','${param.openid})`;
  }
}

module.exports = new UserModel();
