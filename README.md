# suironChallenge2022GroupC
## 2022年度ナレッジグラフ推論チャレンジ【実社会版】の応募作品

内容は随時追加していきます。

### 公開データで結果を再現するための手順
以下のサイトにアクセス
<https://suiron-challenge2022-group-c.vercel.app/>

試したいsparqlendpointがない場合には、http://kozaki-lab.osakac.ac.jp/agraph/kgrc4siを使っていただければ動作します。（2023/3/30現在）


※利用するエンドポイントが"http:"の場合、ブラウザによってブロックされます。以下の方法で設定を変更すると利用できますが、セキュリティ上の問題があるため、自己責任でお願いいたします。


[ブラウザーで混在したコンテンツを有効化する - Adobe](https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html?lang=ja)

### 未公開データでシステムを検証するための手順
1. fusekiなどを用いて、未公開データのsparqlエンドポイントを立ち上げる
2. Download ZIPで、リポジトリをダウンロードする
![2023-03-30 01_24_52-shunafuku_suironChallenge2022GroupC - Brave](https://user-images.githubusercontent.com/74655911/228605455-4979e3e1-2781-4ee5-9bf4-5367f4b7823c.jpg)
3. ダウンロードしたzipを解凍し、local_testフォルダ内にあるindex.htmlをwebブラウザで開く
4. 危険な状況があるかを確認したいsituationのURIをsituationUriに、1.で立ち上げたsparqlエンドポイントのurlをendpointUrlに、それぞれ入力する
5. 実行ボタンを押すと、危険な状況一覧が表示されます

fusekiでsparqlエンドポイントを立ち上げ、実行した例
![image](https://user-images.githubusercontent.com/74655911/228607515-c67c2012-bac2-4700-8354-b9b778876f05.png)

