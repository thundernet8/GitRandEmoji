const axios = require("axios");
const qs = require("qs");
const fs = require("fs");
const path = require("path");

const apibase = "http://pinyin.sogou.com/dict/ywz/ajax/make_list.php";

const cats = [
  { name: "常用", en: "general", tag: 1, pages: 7 },
  { name: "高兴", en: "happy", tag: 2, pages: 8 },
  { name: "卖萌", en: "mou", tag: 3, pages: 5 },
  { name: "震惊", en: "amaze", tag: 4, pages: 3 },
  { name: "生气", en: "angry", tag: 5, pages: 6 },
  { name: "无奈", en: "wunai", tag: 6, pages: 1 },
  { name: "晕", en: "yun", tag: 7, pages: 2 },
  { name: "道歉", en: "apologize", tag: 8, pages: 1 },
  { name: "动物", en: "animal", tag: 9, pages: 2 },
  { name: "害羞", en: "shy", tag: 10, pages: 2 },
  { name: "哭", en: "cry", tag: 11, pages: 1 },
  { name: "么么哒", en: "meme", tag: 12, pages: 1 },
  { name: "睡啦", en: "sleep", tag: 13, pages: 1 },
  { name: "再见", en: "bye", tag: 14, pages: 2 },
  { name: "傲娇", en: "aojiao", tag: 15, pages: 2 },
  { name: "吃货", en: "eat", tag: 16, pages: 1 },
  { name: "得意", en: "deyi", tag: 17, pages: 3 },
  { name: "害怕", en: "fear", tag: 18, pages: 1 },
  { name: "囧", en: "jiong", tag: 19, pages: 2 },
  { name: "赞", en: "like", tag: 20, pages: 2 },
  { name: "难过", en: "hard", tag: 21, pages: 3 },
  { name: "贱", en: "jian", tag: 22, pages: 2 },
  { name: "其他", en: "other", tag: 23, pages: 1 }
];

const headers = {
  "Content-type": "application/x-www-form-urlencoded",
  Accept: "application/json",
  Cookie:
    "PHPSESSID=5te4jofrjkgpgb9unaol97sj47; IPLOC=CN3304; SUV=1509703578574994; SMYUV=1509703578575527",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
};

const ax = axios.create({
  baseURL: apibase,
  timeout: 60000,
  withCredentials: true,
  headers
});

function cwrap(tag, page) {
  return ax
    .post(
      apibase,
      qs.stringify({
        tag_id: tag,
        type: "tag",
        page
      })
    )
    .then(resp => {
      return resp.data.data;
    });
}

function cwrapCat(name, tag, pages) {
  const promises = [];
  for (var i = 1; i <= pages; i++) {
    promises.push(cwrap(tag, i));
  }
  let yans = [];
  Promise.all(promises).then(resp => {
    yans = resp.reduce(function(pre, cur) {
      return pre.concat(
        cur.map(x => {
          delete x.size;
          return x;
        })
      );
    }, []);
    fs.writeFileSync(
      path.resolve("tmp/yans/" + name + ".ts"),
      `const ${name}=${JSON.stringify(yans)};\r\n\r\nexport default ${name}`
    );
  });
}

cats.forEach(cat => {
  cwrapCat(cat.en, cat.tag, cat.pages);
});
