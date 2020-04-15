$(function () {
  // 上に戻るボタンの初期化
  let topBtn = $('#scrollTop');
  topBtn.hide();
  
  // ある程度スクロールされたら、上に戻るボタンを表示する
  $(window).scroll(function() { // windowｵﾌﾞｼﾞｪｸﾄのｽｸﾛｰﾙｲﾍﾞﾝﾄに対して処理を行う (windouをｽｸﾛｰﾙしたら発動)
    if ($(this).scrollTop() > 200) { 
      // ↑ｽｸﾛｰﾙ位置の取得  もしそのｽｸﾛｰﾙ位置が200px以上なら
      topBtn.fadeIn(); // フェードインで表示
    } else { // そうでないなら
      topBtn.fadeOut(); // フェードアウトで非表示
    }
  });

  // クリックで上に戻るボタン
  topBtn.click(function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    },500);
  });
});

