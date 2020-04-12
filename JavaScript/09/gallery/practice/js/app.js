// アルバムデータの作成
let album = [ //変数letを定義 配列
  { src: 'img/1.jpg', msg: '山道の緑が気持ちいい' },// 1つ１つがｵﾌﾞｼﾞｪｸﾄ
  { src: 'img/2.jpg', msg: '階段きつかった' },
  { src: 'img/3.jpg', msg: '高尾山薬王院！' },
  { src: 'img/4.jpg', msg: '帰りはロープウェイでスイスイ' },
  { src: 'img/5.jpg', msg: '〆のお蕎麦です' }
  // src,msg はプロパティ 後ろは値
];

// 最初のデータを表示しておく
let mainImage = document.createElement('img'); //変数 mainImage を定義 document内にcreateElement(ﾒｿｯﾄﾞ)を使いimg要素を生成
mainImage.setAttribute('src', album[0].src); //上記で生成したimg要素にsrc属性、ｲﾝﾃﾞｯｸｽ番号0のﾌﾟﾛﾊﾟﾃｨsrcをセット
mainImage.setAttribute('alt', album[0].msg); //上記で生成したimg要素にalt属性、ｲﾝﾃﾞｯｸｽ番号0のﾌﾟﾛﾊﾟﾃｨmsgをセット

let mainMsg = document.createElement('p'); // 変数mainMsg を定義 document内にcreateElement(ﾒｿｯﾄﾞ)を使いp要素を生成
mainMsg.innerText = mainImage.alt; // mainImage の altに入るmsgのテキストを上記で生成したｐ要素に代入

let mainFlame = document.querySelector('#gallery .main'); // 変数 mainFlame を定義 HTML文書から id名gallery,class名main の要素を取得
mainFlame.insertBefore(mainImage, null); // 上記で取得した要素のnullの前(実際は一番後ろ)にmainImage を挿入
mainFlame.insertBefore(mainMsg, null);// 上記で取得した要素のnullの前(実際は一番後ろ)にmainMsg を挿入

// サムネイル写真画像の表示
let thumbFlame = document.querySelector('#gallery .thumb'); // 変数 thumbFlame を定義 document内の最初のid名gallery,class名thumb の要素を取得
for (let i = 0; i < album.length; i++) { // 繰り返し処理 iの値がalbumの長さになるまで
  let thumbImage = document.createElement('img'); //変数 thumbImg を定義 document内にimg要素を生成
  thumbImage.setAttribute('src', album[i].src); //上記で生成したimg要素にsrc属性、ｲﾝﾃﾞｯｸｽ番号[i]のﾌﾟﾛﾊﾟﾃｨsrcをセット
  thumbImage.setAttribute('alt', album[i].msg); //上記で生成したimg要素にalt属性、ｲﾝﾃﾞｯｸｽ番号[i]のﾌﾟﾛﾊﾟﾃｨmsgをセット
  thumbFlame.insertBefore(thumbImage, null); // 24行目で取得した要素(thumbFlame)のnullの前(実際は一番後ろ)にthumbImgを挿入
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function (event) { //イベントの設定 clickした時
  if (event.target.src) { //src属性の値があるか確認してもしあったらimg要素って認識する
    mainImage.src = event.target.src;  // 認識した際にはmainImageのsrc属性に対しクリックされたimg要素のsrc属性を代入
    mainMsg.innerText = event.target.alt; // 更にmainMsgのalt属性に対しクリックされたimg要素のalt属性を代入
  }
})
