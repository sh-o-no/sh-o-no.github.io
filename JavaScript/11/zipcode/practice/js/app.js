$(function() {
  $('#btn').on('click', function(){
    //  入力された郵便番号でWebAPIに住所情報をリクエスト
    $.ajax({// ajaxﾒｿｯﾄﾞ
      url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(), // zipcode の値を取得し結合(郵便番号)
      dataType : 'jsonp', // レスポンスのデータ形式をjsonpへ
    }).done(function(data) {// 通信処理に成功した場合の処理
      if (data.results) { // もしdata.resultsが取得できたら
        //この時関数の引数(data)にはレスポンスで得たデータが自動的に格納される
        setData(data.results[0]); //この関数で処理(19~24行目)
      } else { //そうでない場合
        alert('該当するデータがみつかりませんでした'); // アラートにこの文章を出力
      }
    }).fail(function(data) { // 通信処理に失敗した時
      alert('通信に失敗しました'); // アラートにこの文章を出力
    })
  });

  // データ取得が成功した時の処理
  function setData(data) {
    //取得データを各HTML要素に代入
    $('#prefecture').val(data.address1);// 都道府県名
    $('#city').val(data.address2);// 市区町村名
    $('#address').val(data.address3);// 町域名
  }
});