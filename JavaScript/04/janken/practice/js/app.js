function janken () {
  /* 定数定義 */
  // ジャンケンの手の番号を設定
  const GU = 1;//GUという変数に1を代入→不変なので定数、constを使う
  const CHOKI = 2;//CHOKIは2
  const PA = 3;//PAは3
  
  /* 関数定義 */
  // 人間に手を入力してもらう機能
  function getHumHand() {
    let hum = prompt('半角数字で1～3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');//変数humに代入する数字を取得
    hum = parseInt(hum, 10);//変数humを整数にする(10は10進数)
    if (hum !== GU && hum !== CHOKI && hum !== PA) {//もしhumに入力された数値が1でも2でも3でもない場合(!==は厳密に等しくない)
      return undefined;//undefined と返す
    } else {//そうではない場合
      return hum;//この数値をもって関数元へ戻る
    }
  }
  
  // コンピュータの手を決める
  function getComHand() {
    return Math.floor(Math.random() * 3) + 1;//1から3のランダムな整数を作成
  }
  
  // コンピュータの手の名前を取得
  function getHandName(num) {
    switch (num) {
      case GU:
        return 'グー';//受け取った変数(num)が1の場合、グーを返す
      case CHOKI:
        return 'チョキ';//受け取った変数(num)が2の場合、チョキを返す
      case PA:
        return 'パー';//受け取った変数(num)が3の場合、パーを返す
    }
  }
  
  // 結果の判定
  function getResult (com, hum) {
    if(hum === com) {
      return '結果はあいこでした。';//受け取った変数(com, hum)が厳密に等しい
    } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum ===CHOKI )){
      return '勝ちました。';//上記に当てはまらないで、受け取った変数(com, hum)においてcom=GU かつ hum=PAもしくはcom=CHOKI かつ hum=GUもしくはcom=PA かつ hum=CHOKI
    } else {
      return '負けました。';//上記に当てはまらない
    }
  }
  
  //最終的な結果のメッセージ
  function getResultMsg(com, hum){
    return getResult(com, hum) + 'コンピュータの出した手は「' + getHandName (com) + '」でした。';
  }
  
  /* 実行する処理 */
  let hum = getHumHand();
  if(!hum) {
    alert('入力値をうまく認識できませんでした。ブラウザを再読み込みするともう一度挑戦できます。');
  } else {
    let com = getComHand();
    alert(getResultMsg(com, hum));
  }
}
janken();