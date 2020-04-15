// リクエストパラメータのセット
const KEY = 'AIzaSyCtxgU1GUz7BKP7IEgY3XQxOiDfEgCSkG4';// API KEY
let url = 'https://www.googleapis.com/youtube/v3/search?';// API URL
url += 'type=video'; // 動画を検索する (video,channel,playlistのどれかを指定)
url += '&part=snippet'; // 検索結果にすべてのﾌﾟﾛﾊﾟﾃｨを含む
url += '&q=music'; // 検索ワード このサンプルでは music に指定
url += '&videoEmbeddable=true'; // webページに埋め込み可能な動画のみを検索
url += '&videoSyndicated=true'; // youtube.com 以外で再生できる動画のみに限定
url += '&maxResults=6'; // 動画の最大取得件数
url += '&key=' + KEY; // API KEY
// これ全部くっつけてる↑

// HTMLが読み込まれてから実行する処理
$(function () {
  // YouTubeの動画を検索して取得
  $.ajax({
    url: url,// 上で変数に代入したurl,
    dataType: 'jsonp' // レスポンスデータの形式→jsonp 
  }).done(function (data) {
    if (data.items) {// レスポンスで得たデータの中にitemsが存在していた場合
      // データ取得が成功した時の処理
      setData(data); //30~43行目の関数を呼び出し
    } else {// そうでない場合
      console.log(data);//レスポンスがどうなってたか確認するため、コンソールに表示しておく
      alert('該当するデータが見つかりませんでした'); // アラートにこの文章を表示
    }
  }).fail(function (data) {// 通信に失敗した場合
    alert('通信に失敗しました');// この文章をアラートに出力
  })
  function setData(data) { // 関数を定義
    let result = '';
    let video = '';
    // 動画を表示するHTMLを作る
    // Object.entries(data).array.forEach(element => {
    for (let i = 0; i < data.items.length; i++) { // レスポンスデータのitemﾌﾟﾛﾊﾟﾃｨにある動画情報を1データずつ取り出し
      video = '<iframe src="https://www.youtube.com/embed/';
      video += data.items[i].id.videoId;
      video += '" allowfullscreen></iframe>';
      result += '<div class="video">' + video + '</div>';
    }
    // HTMLに反映する
    $('#videoList').html(result);
    // idがvideoListを持つ要素に反映
  }
});

