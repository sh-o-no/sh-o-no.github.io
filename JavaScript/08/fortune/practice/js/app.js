// 要素オブジェクトの取得
let btnElementOmikuji = document.getElementById('btnDoOmikuji');
let divElementResultArea = document.getElementById('resultArea');

// イベントの登録
btnElementOmikuji.addEventListener('click', function () {
  divElementResultArea.innerHTML = '結果は「' + omikuji.loterry() + '」でした。';
});

// おみくじオブジェクトの定義
let omikuji = {
  kujiArray: ["大吉", "吉", "中吉", "小吉", "凶"],
  loterry: function () {
    return this.kujiArray[Math.floor(Math.random() * this.kujiArray.length)];
  }
}

console.log(omikuji.loterry());