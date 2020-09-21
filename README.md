# moecost-jsonconv

## はじめに

このプロジェクトは、別プロジェクト「[moecoop-data](https://github.com/coop-mojo/moecoop-data)」で公開されたデータを「moecost」用に変換するためのツール的な何かです。「moecost」は現在開発作業中で、リポジトリも何も整備していないので、このプロジェクトはよくわからない何かだと思います。それでいいと思います。

## 環境

私が動作確認した環境は下記のとおりです。

|ソフト|種類／バージョン|
| ---- | ------ |
| OS | windows 10 1903(64bit)|
| パッケージ管理| npm 6.14.4|
| node.js| v12.17.0|

## プロジェクト開始方法

下記コマンドを実行。
```
$ cd moecost-jsonconv

$ npm start
```

### 実行時の注意点

プロジェクト実行後、`/tsconfig.json`の`compilerOptions.resolveJsonModule`が`true`に変更されます。
これにより、読み取りJSON用の型定義を記載しているにもかかわらず、型をうまく解決できなくなってエラーになります。

react/typescriptの基幹部の修正が必要と思われるのですが、正直怖くてできません。
**正しい**対応方法をご存知の方は、教えていただければと思います。

暫定対応として、一度プロジェクト開始後に、`tsconfig.json`の`compilerOptions.resolveJsonModule`を`false`に変更して上書き。
その後、`/src/index.tsx/`か何か、プロジェクトの再更新が行われるファイルの空上書きを実施することで正常に表示されます。

## ライセンス

### プログラムソースについて

パブリックドメインです。詳細はLICENSEファイルをご参照ください。

### データ部(./src/moecoop-data/)について

「[moecoop-data](https://github.com/coop-mojo/moecoop-data)」にてライセンスをご確認ください。私が確認した地点2020/09/20ではパブリックドメインでした。また、本ツールで利用している最新については、本家データを一部加工して使用しています。多分私のmoecoop-data内にある最新のコミットを使用していると思います。