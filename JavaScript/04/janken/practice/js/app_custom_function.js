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
    battle_result = ""; //結果が日本語で入る変数
    if (hum === com) {
      battle_result = 'あいこ';
    } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
      battle_result = '勝利';
    } else {
      battle_result = '敗北';
    }

    // // コンピューターの出した手の日本語表記を取得
    // com_hand = "";
    // switch (com) {
    //   case GU:
    //     com_hand = 'グー';//変数内(num)がGUの場合、グーを実行
    //     break;
    //   case CHOKI:
    //     com_hand = 'チョキ';//変数内(num)がCHKIの場合、チョキを実行
    //     break;
    //   case PA:
    //     com_hand = 'パー';//変数内(num)がPAの場合、パーを実行
    //     break;
    // }
    // // 人間の出した手の日本語表記を取得
    // hum_hand = "";
    // switch (hum) {
    //   case GU:
    //     hum_hand = 'グー';//変数内(num)がGUの場合、グーを実行
    //     break;
    //   case CHOKI:
    //     hum_hand = 'チョキ';//変数内(num)がCHKIの場合、チョキを実行
    //     break;
    //   case PA:
    //     hum_hand = 'パー';//変数内(num)がPAの場合、パーを実行
    //     break;
    // }

    function getHandName(num) {
      switch (num) {
        case GU:
          return 'グー';//変数内(num)がGUの場合、グーを実行
        case CHOKI:
          return 'チョキ';//変数内(num)がCHKIの場合、チョキを実行
        case PA:
          return 'パー';//変数内(num)がPAの場合、パーを実行
      }
    }

    // 画面に表示する最後のメッセージ
    // com_hand = getHandName(com);
    // hum_hand = getHandName(hum);    
    msg_result = "結果：" + battle_result;
    msg_com = "コンピューターの手：" + getHandName(com);
    msg_hum = "あなたの手：" + getHandName(hum);
    msg_finish = msg_result + "\n" + msg_com + "\n" + msg_hum;
    alert(msg_finish);
  }

}
janken();