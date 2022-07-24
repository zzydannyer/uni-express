const express = require("express");
const router = express.Router();
const sql = require("../db/sql");
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "zzydannyer的博客" });
});

router.get("/img", (req, res, next) => {
  /* res.send({
    url: path.resolve('./public/img/swiper1.jpg')
  }) */
  res.send({
    data: {
      url: "https://gd-hbimg.huaban.com/74b78a07ea0cbe318432b090ad7c8bed6bf9bd5b8f270-QcoIs7_fw1200",
    },
  });
  // res.sendFile(path.resolve('./public/img/swiper1.jpg'));
  // res.sendFile(__dirname + '/public/img/swiper1.jpg');
});

//推荐
router.get("/index_list/1", (req, res, next) => {
  let page = req.query.page;

  if (page == 1) {
    res.send({
      code: 0,
      data: {
        topBar: [
          { id: 1, name: "推荐" },
          { id: 2, name: "运动户外" },
          { id: 3, name: "服饰内衣" },
          { id: 4, name: "鞋靴箱包" },
          { id: 5, name: "美妆个护" },
          { id: 6, name: "家居数码" },
          { id: 7, name: "食品母婴" },
        ],
        data: [
          {
            type: "swiperList",
            data: [
              /* { id: 1, url: "/public/img/swiper1.jpg" },
              { id: 2, url: "/public/img/swiper2.jpg" },
              { id: 3, url: "/public/img/swiper3.jpg" } */
              {
                id: 1,
                url: "https://m15.360buyimg.com/mobilecms/jfs/t1/6560/39/23551/193911/62260835E6cc781a4/d31c593aad5d8f2c.jpg!cr_1125x449_0_166!q70.jpg",
              },
              {
                id: 2,
                url: "https://imgcps.jd.com/ling4/64083635283/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5c131e9282acdd181da66199/10ffa8bd/cr_1125x449_0_166/s/q70.jpg",
              },
              {
                id: 3,
                url: "https://m15.360buyimg.com/mobilecms/jfs/t1/15472/9/16762/59542/62c79980E10281f79/f99b439b1e8538b3.jpg!cr_1125x449_0_166!q70.jpg",
              },
            ],
          },
          {
            type: "recommendList",
            data: [
              {
                // head: "/public/img/Children.jpg",
                head: "https://m15.360buyimg.com/mobilecms/jfs/t1/79261/9/2825/124936/5d11a4d5E362da657/4ccac1429782827e.jpg!cr_1125x449_0_166!q70.jpg",
                data: [
                  /* { id: 1, url: "/public/img/Children1.jpg" },
                  { id: 2, url: "/public/img/Children2.jpg" },
                  { id: 3, url: "/public/img/Children3.jpg" } */
                  {
                    id: 1,
                    url: "https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/115050/6/26534/119429/62c25bc7E00577392/bde2bb1d769d2ba2.jpg.dpg",
                  },
                  {
                    id: 2,
                    url: "https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/190639/35/22064/395501/623288e8E4e07a360/e69581a0ea5e3c4b.jpg.dpg",
                  },
                  {
                    id: 3,
                    url: "https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/222039/14/2775/242787/61920cb4E6567b731/bb43a328b647fb45.jpg.dpg",
                  },
                ],
              },
              {
                // head: "/public/img/Furnishing.jpg",
                head: "https://m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/96688/34/20485/138211/61db8b13E28410acc/6f766472b69b17bf.jpg!cr_1053x420_4_0!q70.jpg",
                data: [
                  /* { id: 1, url: "/public/img/Furnishing1.jpg" },
                  { id: 2, url: "/public/img/Furnishing2.jpg" },
                  { id: 3, url: "/public/img/Furnishing3.jpg" } */
                  {
                    id: 1,
                    url: "https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/104444/22/25324/55636/623b081cE8a7ead36/09db7eb140235ddc.jpg.dpg",
                  },
                  {
                    id: 2,
                    url: "https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/109579/32/25090/682970/622ab51fE336913c7/7ed6b578f7056972.jpg.dpg0",
                  },
                  {
                    id: 3,
                    url: "https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/202337/31/23059/279604/62c7866bEbf7e9dab/24750776c541745c.jpg.dpg",
                  },
                ],
              },
            ],
          },
          {
            type: "commodityList",
            data: [
              {
                id: 1,
                // url: '/public/img/commodity1.jpg',
                url: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/66533/33/9289/308792/5d7079f2E60161450/55dbe64ee377a8c7.jpg!q70.dpg.webp",
                name: "康维他（comvita）麦卢卡蜂蜜 (UMF10+) 500g 新西兰进口天然蜂蜜",
                oprice: 299,
                pprice: 659,
                discount: 5.2,
              },
              {
                id: 2,
                // url: '/public/img/commodity2.jpg',
                url: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/6568/12/21385/108298/62a598caEcdadf526/c151d03048dc576f.jpg!q70.dpg.webp",
                name: "衣帽架晾衣杆衣架杆子卧室室外晒衣杆落地式挂衣架简易宿舍挂衣架 60款",
                oprice: 299,
                pprice: 659,
                discount: 5.2,
              },
              {
                id: 3,
                // url: '/public/img/commodity3.jpg',
                url: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/122641/2/28941/405946/62c650e5E6be650fd/44b2847ddf70f69b.jpg!q70.dpg.webp",
                name: "方太（FOTILE）C3洗碗机 新升级水槽式洗碗一体除菌家用嵌入式全自动CT03\\C3洗碗机 C3（右侧）洗碗机",
                oprice: 299,
                pprice: 659,
                discount: 5.2,
              },
              {
                id: 4,
                // url: '/public/img/commodity4.jpg',
                url: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/41712/17/19700/403102/62c26433E0f11d872/60367922b811f8f7.jpg!q70.dpg.webp",
                name: "惠寻 京东自有品牌乳酸菌风味夹心吐司面包400g 整箱休闲食品早餐下午茶饱腹办公室零食",
                oprice: 299,
                pprice: 659,
                discount: 5.2,
              },
            ],
          },
        ],
      },
    });
  } else if (page < 3) {
    res.send({
      data: [
        {
          type: "commodityList",
          data: [
            {
              id: 1,
              // url: '/public/img/commodity1.jpg',
              url: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/66533/33/9289/308792/5d7079f2E60161450/55dbe64ee377a8c7.jpg!q70.dpg.webp",
              name: "康维他（comvita）麦卢卡蜂蜜 (UMF10+) 500g 新西兰进口天然蜂蜜",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 2,
              // url: '/public/img/commodity2.jpg',
              url: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/6568/12/21385/108298/62a598caEcdadf526/c151d03048dc576f.jpg!q70.dpg.webp",
              name: "衣帽架晾衣杆衣架杆子卧室室外晒衣杆落地式挂衣架简易宿舍挂衣架 60款",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 3,
              // url: '/public/img/commodity3.jpg',
              url: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/122641/2/28941/405946/62c650e5E6be650fd/44b2847ddf70f69b.jpg!q70.dpg.webp",
              name: "方太（FOTILE）C3洗碗机 新升级水槽式洗碗一体除菌家用嵌入式全自动CT03\\C3洗碗机 C3（右侧）洗碗机",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 4,
              // url: '/public/img/commodity4.jpg',
              url: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/41712/17/19700/403102/62c26433E0f11d872/60367922b811f8f7.jpg!q70.dpg.webp",
              name: "惠寻 京东自有品牌乳酸菌风味夹心吐司面包400g 整箱休闲食品早餐下午茶饱腹办公室零食",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
          ],
        },
      ],
    });
  } else {
    res.end("success");
  }
});

//运动户外
router.get("/index_list/2", (req, res, next) => {
  let page = req.query.page;
  if (page < 3) {
    res.send({
      code: 0,
      data: [
        {
          type: "banner",
          // url: "/public/img/banner1.jpg"
          url: "https://m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/214309/30/9926/212128/61d3a663E061f9640/09ab0fd159edda28.jpg!cr_1053x420_4_0!q70.jpg",
        },
        {
          type: "iconsList",
          data: [
            {
              id: 1,
              name: "超市",
              // url: "/public/img/icons1.png"
              url: "https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg",
            },
            {
              id: 2,
              name: "数码",
              // url: "/public/img/icons2.png"
              url: "https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg",
            },
            {
              id: 3,
              name: "百货",
              // url: "/public/img/icons3.png"
              url: "https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png!q70.jpg",
            },
            {
              id: 4,
              name: "生鲜",
              // url: "/public/img/icons4.png"
              url: "https://m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg",
            },
            {
              id: 5,
              name: "到家",
              // url: "/public/img/icons5.png"
              url: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
            },
            {
              id: 6,
              name: "好店",
              // url: "/public/img/icons6.png"
              url: "https://m15.360buyimg.com/mobilecms/jfs/t1/34248/39/16616/4689/62bbbdccE9f11132e/d51caf15f2f412b2.png!q70.jpg",
            },
            {
              id: 7,
              name: "会员",
              // url: "/public/img/icons7.png"
              url: "https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg",
            },
            {
              id: 8,
              name: "缴费",
              // url: "/public/img/icons8.png"
              url: "https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png!q70.jpg",
            },
          ],
        },
        {
          type: "hotList",
          data: [
            {
              id: 1,
              // url: '/public/img/hot1.jpg',
              url: "https://img14.360buyimg.com/n2/s370x370_jfs/t1/157411/25/7686/104717/6031d91aEf9f1883c/4c8cef6666f38426.jpg!q70.jpg",
              name: "乔丹短袖t恤男圆领2022夏季新款透气速干休闲服翻领舒适内搭时尚健身衣运动短袖男 白色【纯棉透气推荐】 XL",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 2,
              // url: '/public/img/hot2.jpg',
              url: "https://img11.360buyimg.com/n2/s370x370_jfs/t1/106656/15/28829/136198/628a30d1Eba43a69a/dac406468349e4b9.jpg!q70.jpg",
              name: "热李宁（LI-NING）短袖t恤男女同款夏季新品宽松透气ins风潮流情侣款国潮运动半袖T恤体恤 标准白(大logo) XL/180",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 3,
              // url: '/public/img/hot3.jpg',
              url: "https://img12.360buyimg.com/n2/s370x370_jfs/t1/205883/4/25247/150388/62c70f84Eedb95786/3f468c8b5bf381dc.jpg!q70.jpg",
              name: "安踏运动裤男士夏季新薄款梭织速干户外跑步长裤卫裤健身篮球服饰透气裤子训练男裤休闲小脚束脚裤百搭宽松 -1基础黑/冰丝速干【店长推荐】 L/175",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 4,
              // url: '/public/img/hot3.jpg',
              url: "https://img12.360buyimg.com/n2/s308x308_jfs/t1/2465/28/16908/239470/627b8344Ee2f7bfc2/cfb8ac177fa4748a.jpg!q70.webp",
              name: "安踏运动裤男裤子男夏季束脚裤轻薄新款针织冰丝健身户外卫裤篮球服饰宽松百搭收口小脚 -1基础黑（拉链口袋） L/175",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 5,
              // url: '/public/img/hot1.jpg',
              url: "https://img13.360buyimg.com/n2/s370x370_jfs/t1/29864/33/16348/268387/62822a33E558fa4a4/15a74d851a765917.jpg!q70.jpg.webp",
              name: "鸿星尔克男鞋红星运动鞋男2022春夏季新款飞织透气网面皮革防水保暖舒适男士跑步鞋学生潮流休闲鞋子男冬 正白/浅灰(飞织) 42",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 6,
              // url: '/public/img/hot2.jpg',
              url: "https://img12.360buyimg.com/n2/s370x370_jfs/t1/107085/28/25266/164171/62388fb1Eabe7903a/7ecb18f736a7c9a5.jpg!q70.jpg.webp",
              name: "岁漫轩跑步鞋男鞋夏季透气网面飞织网鞋莆田减震飞马37登月38休闲运动鞋男 白彩虹 42",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
          ],
        },
        {
          type: "shopList",
          data: [
            {
              id: 1,
              // url: '/public/img/shop1.jpg',
              url: "https://img12.360buyimg.com/n2/s270x270_jfs/t1/93472/23/28041/162828/6278edccE03757af6/944dc32414d5c99a.jpg!q70.webp",
              name: "禾笙堂 玉白菜摆件金蟾蜍客厅摆件公司店铺开业乔迁礼品工艺品传统酒四季家居酒店大堂公办室 金蟾大号长38.5厘米",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 2,
              // url: '/public/img/shop2.jpg',
              url: "https://img13.360buyimg.com/n2/s240x240_jfs/t1/35347/35/16676/183979/62c86055Eb321ee86/3f5cfc95f448c993.jpg!q70.jpg.webp",
              name: "联想（Lenovo） 天逸510Pro-14升商务办公台式机电脑主机酷睿Win11 店铺特惠|酷睿i5 8G 512G 23英寸",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 3,
              // url: '/public/img/shop3.jpg',
              url: "https://img12.360buyimg.com/n2/s240x240_jfs/t1/181708/39/4475/105413/60a1de41E4cc09534/4e41bbbbd1ae829b.jpg!q70.jpg.webp",
              name: "Raidy Boer/雷迪波尔时尚休闲夏季男士刺绣修身水洗牛仔短裤4026 黑色 30",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 4,
              // url: '/public/img/shop4.jpg',
              url: "https://img10.360buyimg.com/n2/s240x240_jfs/t1/154486/31/22906/192600/6278bc99E9abfb24a/506bf75170a1fe5f.jpg!q70.jpg.webp",
              name: "侑家良品 12寸白瓷风水招财猫家居家装摆件店铺开业生日礼物收银台客厅礼品自动摇手招手发财猫 家庭版",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 5,
              // url: '/public/img/shop1.jpg',
              url: "https://img13.360buyimg.com/n2/s240x240_jfs/t1/206403/34/22267/225977/628739ccEaaaf25ad/ef4a24567fbbd233.jpg!q70.jpg.webp",
              name: " 板谷山 招财猫店铺创意开业礼品乔迁生日礼物家居客厅办公室发财猫装饰摆件 超大号14寸摇手元宝猫生意兴隆",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 6,
              // url: '/public/img/shop2.jpg',
              url: "https://img13.360buyimg.com/n2/s270x270_jfs/t1/216906/15/16146/196059/62414bd7Eaa1443fd/0cbe3ab884df3337.jpg!q70.webp",
              name: "NASA男装联名春夏季短袖t恤男潮流2022新款国潮宽松oversize男女同款情侣装体恤衣服 黑色 XL建议(120-130斤穿)",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 7,
              // url: '/public/img/shop3.jpg',
              url: "https://img13.360buyimg.com/n2/s270x270_jfs/t1/161358/22/19176/126540/60792a7aE8ce6decf/8e35f334639c94f0.jpg!q70.webp",
              name: "灯灵 办公室吊灯led长条灯商场店铺超市写字楼饭馆吸吊两用直播间平板吊线灯长方形餐厅学校办公灯具灯饰 黑框直角120*20cm-48W白光（工程高亮款）",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
            {
              id: 8,
              // url: '/public/img/shop4.jpg',
              url: "https://img10.360buyimg.com/n2/s270x270_jfs/t1/18769/12/16952/181323/62b2df12Ee2aa9105/eb9d236221221121.jpg!q70.webp",
              name: "   北迈 品牌男士t恤夏季新款简约轻奢冰丝光棉T白色短袖宽松【冰肌感】半袖男装体恤百搭打底衫男 白色-战马 180/XL（适合135-150斤）  ",
              oprice: 299,
              pprice: 659,
              discount: 5.2,
            },
          ],
        },
      ],
    });
  } else {
    res.end("success");
  }
});

//服饰内衣
router.get("/index_list/3", (req, res, next) => {
  res.send({
    code: 0,
    data: [],
  });
});
//鞋靴箱包
router.get("/index_list/4", (req, res, next) => {
  res.send({
    code: 0,
    data: [],
  });
});
//美妆个护
router.get("/index_list/5", (req, res, next) => {
  res.send({
    code: 0,
    data: [],
  });
});
//家居数码
router.get("/index_list/6", (req, res, next) => {
  res.send({
    code: 0,
    data: [],
  });
});
//食品母婴
router.get("/index_list/7", (req, res, next) => {
  res.send({
    code: 0,
    data: [],
  });
});

module.exports = router;
