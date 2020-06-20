let que = document.getElementById("que");
let res = document.getElementById("res");
let logo = document.getElementById("logo");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let cho = document.getElementById("cho");
let cnt = 40;
let sco = 0;
let flag = true;
let time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア : " + sco + " | 時間　: " + cnt + "秒";
  } else {
    res.style.color = "red";
    res.textContent = "スコア : " + sco + " | 終了";
    que.textContent = "時間切れ!";
    flag = false;
    clearInterval(time);
  }
}, 1000);
let num = 0;
let max = 10;
let question = new Array(max);
question = [
  "index",
  "content",
  "project",
  "document",
  "technique",
  "constant",
  "local",
  "function",
  "style",
  "command",
];
let choice = new Array(max);
choice = [
  "A.索引　B.作り　C.書き方　D.開く",
  "A.成績　B.普通　C.中身　D.流行",
  "A.責任　B.計画　C.起きる　D.特定の",
  "A.文書　B.書く　C.文学　D.変える",
  "A.技術　B.教師　C.似ている　D.種類",
  "A.変動　B.正式　C.要素　D.定数",
  "A.様相　B.場所　C.狭い　D.地元の",
  "A.整数　B.関数　C.小数　D.引数",
  "A.典型的な　B.様式　C.概念　D.分類",
  "A.対話　B.行動　C.命令　D.順序",
];
let seikai = new Array(max);
seikai = ["a", "c", "b", "a", "a", "d", "d", "b", "b", "c"];
a.addEventListener("click", () => {
  answer("a");
});
b.addEventListener("click", () => {
  answer("b");
});
c.addEventListener("click", () => {
  answer("c");
});
d.addEventListener("click", () => {
  answer("d");
});
let answer = (str) => {
  if (flag) {
    if (seikai[num] == str) {
      que.textContent = "問題" + (num + 1) + "正解";
      logo.src = "img/maru.png";
      sco++;
      res.textContent = "スコア : " + sco + " | 時間　: " + cnt + "秒";
    } else {
      console.log("不正解");
      que.textContent = "問題" + (num + 1) + "不正解";
      logo.src = "img/batsu.png";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1) + " " + question[num];
        cho.textContent = choice[num];
        logo.src = "img/kuhaku.png";
      }, 500);
    } else {
      que.textContent = "問題の解答終了！";
      clearInterval(time);
      if (sco == max) {
        setTimeout(() => {
          que.textContent = "全問正解!おめでとう!";
          logo.src = "img/clear.png";
        }, 500);
      }
    }
  }
};
