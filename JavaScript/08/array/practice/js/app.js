// おみくじの結果データを作成
results = ['大吉', '吉', '中吉', '小吉', '凶'];

// 配列「results」をコンソールに表示
console.log(results);

// インデックスが「0」の要素をコンソールに表示
console.log(results[0]);

// 配列に所属するデータをfor文ですべて表示
// for (let i = 0; i < results.length; i++) {
//   console.log('index:' + i + 'データ:' + results[i]);
// }

// 配列を全部ぶん回すループはfor文じゃなくてこっちが主流
results.forEach((value, index) => {
  console.log('index' + index + ':' + value);
});