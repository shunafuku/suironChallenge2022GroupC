import Head from 'next/head'
import Style from './index.module.scss'

interface Props {
  inputValue: string;
  searchHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  situationUri: string;
  endPointUrl: string;
  situationUriHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  endPointUrlHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  tableList: any[];
  openBalloon: (index: string) => void;
  closeBalloon: (index: string) => void;
}

const Presentation: React.FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>推論チャレンジ2022</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="推論チャレンジ2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
      </Head>
      <div className={Style.wrapper}>
        <div className={Style.container}>
          <h1>推論チャレンジ2022グループC</h1>
          <div className={Style.image_top}>
            <img src="\assets\img\top\top.jpg" alt="" />
          </div>
          <p className={Style.caption}>引用：<a href="https://challenge.knowledge-graph.jp/2022/">ナレッジグラフ推論チャレンジ【実社会版】2022 〜生活行動における安心・安全を目指して〜</a></p>
          <div className={Style.intro}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
          <h2>状況に応じた危険なオブジェクトと解決策</h2>
          <div className={Style.lead}>
            以下の表は、特定の状況で危険になり得るオブジェクト、
          </div>
          <form className={Style.formWrapper} onSubmit={props.handleSubmit}>
            <div className={Style.queryWrapper}>
              <div className={Style.situation}>
                <label>situationUri</label>
                <input type="text" name='situation' placeholder='situationのuriを入力' value={props.situationUri} onChange={props.situationUriHandleChange}/>
              </div>
              <div className={Style.endPoint}>
                <label>endPointUrl</label>
                <input type="text" name='endPoint' placeholder='endPointのurlを入力' value={props.endPointUrl} onChange={props.endPointUrlHandleChange}/>
              </div>
              <button className={Style.submit} type="submit">
                <p>検索</p>
              </button>
            </div>
            <div className={Style.search}>
              <label>状況から危険なオブジェクトと解決策を出力</label>
              <div className={Style.inputWrapper}>
                <input type="text" placeholder='状況を検索する' value={props.inputValue} onChange={props.searchHandleChange} />
              </div>
            </div>
          </form>
          <div className={Style.table}>
            <div className={Style.thead}>
              <div className={Style.tr}>
                <div className={Style.th_situation}>危険なオブジェクト</div>
                <div className={Style.th_resolution}>解決策</div>
              </div>
            </div>
            <div className={Style.tbody}>
              {props.tableList.map((table, index) => {
                return (
                  <div key={index} className={Style.tr}>
                    <div className={Style.th} onMouseOver={() => props.openBalloon(String(index))} onMouseLeave={() => props.closeBalloon(String(index))}>
                      {table.factor}
                      <div id={String(index)} className={Style.reason}>{table.reason}</div>
                    </div>
                    <div className={Style.th}>{table.solution}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <h2>まとめ</h2>
          <div className={Style.summary}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
        </div>
      </div>
    </>
  )
}

export default Presentation