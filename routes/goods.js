const express = require("express");
const router = express.Router();
const sql = require("../db/sql");
const path = require("path");

const baseUrl = "http://47.100.249.122:3000";

//搜索结果
router.get("/search", (req, res, next) => {
  //desc 降序  asc升序
  const [goods_name, order_name] = Object.keys(req.query);
  const name = req.query[goods_name];
  const order = req.query[order_name];

  sql.query(
    `select * from uni_goods where name like '%${name}%' order by ${order_name} ${order}`,
    (error, result, fields) => {
      if (error) {
        // throw error
        console.error(error);
        return;
      }
      return res.send({
        code: 0,
        data: result,
      });
    }
  );
});

//列表展示
router.get("/list", (req, res, next) => {
  res.json({
    code: 0,
    data: [
      {
        id: 1,
        name: "家居家纺",
        data: [
          {
            name: "家纺",
            list: [
              {
                id: 1,
                name: "毛巾/浴巾",
                url: baseUrl + "/img/list1.jpg",
              },
              {
                id: 2,
                name: "枕头",
                url: baseUrl + "/img/list1.jpg",
              },
            ],
          },
          {
            name: "生活用品",
            list: [
              {
                id: 1,
                name: "浴室用品",
                url: baseUrl + "/img/list1.jpg",
              },
              {
                id: 2,
                name: "洗晒",
                url: baseUrl + "/img/list1.jpg",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "女装",
        data: [
          {
            name: "裙装",
            list: [
              {
                id: 1,
                name: "半身裙",
                url: baseUrl + "/img/list1.jpg",
              },
              {
                id: 2,
                name: "连衣裙",
                url: baseUrl + "/img/list1.jpg",
              },
            ],
          },
          {
            name: "上衣",
            list: [
              {
                id: 1,
                name: "T恤",
                url: baseUrl + "/img/list1.jpg",
              },
              {
                id: 2,
                name: "衬衫",
                url: baseUrl + "/img/list1.jpg",
              },
            ],
          },
        ],
      },
    ],
  });
});

module.exports = router;
