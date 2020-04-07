function janken() {

  /* 変数定義 */
  // ジャンケンの手の番号を設定
  const GU = 1;//GUという変数に1を代入→不変なので定数、constを使う
  const CHOKI = 2;//CHOKIは2
  const PA = 3;//PAは3

  /* 実行する処理 */
  let hum = prompt('半角数字で1～3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');//変数humに代入する数字を取得
  hum = parseInt(hum, 10);//変数humを整数にする(10は10進数)
  if (hum !== GU && hum !== CHOKI && hum !== PA) {//もしhumに入力された数値が1でも2でも3でもない場合(!==は厳密に等しくない)
    alert('入力値をうまく認識できませんでした。ブラウザを再読み込みするともう一度挑戦できます。');
  } else {//そうではない場合
    // コンピューターの手を作成
    let com = Math.floor(Math.random() * 3) + 1;

    // human と comの手が揃ったので判定
    msg = ""; //結果のメッセージが入る変数
    if (hum === com) {
      msg = '結果はあいこでした。';
    } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
      msg = '勝ちました。';
    } else {
      msg = '負けました。';
    }

    // コンピューターの出した手の日本語表記を取得
    com_hand_jp = "";
    switch (com) {
      case GU:
        com_hand_jp = 'グー';//変数内(num)がGUの場合、グーを実行
      case CHOKI:
        com_hand_jp = 'チョキ';//変数内(num)がCHKIの場合、チョキを実行
      case PA:
        com_hand_jp = 'パー';//変数内(num)がPAの場合、パーを実行
    }

    alert(msg + 'コンピュータの出した手は「' + com_hand_jp + '」でした。');
  }

}
janken();