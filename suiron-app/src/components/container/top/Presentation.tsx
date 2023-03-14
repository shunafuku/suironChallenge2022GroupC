import Head from 'next/head'
import Style from './index.module.scss'

interface Props {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
          <div className={Style.search}>
            <input type="text" placeholder='検索する' value={props.inputValue} onChange={props.handleChange} />
            <div className={Style.icon}>
              <i className='fas fa-search'></i>
            </div>
          </div>
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
          <div className={Style.comment}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
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