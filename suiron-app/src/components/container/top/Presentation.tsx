import Head from 'next/head'
import Style from './index.module.scss'

interface Props {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tableList: any[];
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
          <div className={Style.intro}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
          <h2>危険な状況と解決策</h2>
          <div className={Style.lead}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
          <div className={Style.search}>
            <input type="text" placeholder='危険な状況を検索する' value={props.inputValue} onChange={props.handleChange} />
            <div className={Style.icon}>
              <i className='fas fa-search'></i>
            </div>
          </div>
          <div className={Style.table}>
            <div className={Style.thead}>
              <div className={Style.tr}>
                <div className={Style.th_situation}>危険な状況</div>
                <div className={Style.th_resolution}>解決策</div>
              </div>
            </div>
            <div className={Style.tbody}>
              {props.tableList.map((table, index) => {
                return (
                  <div key={index} className={Style.tr}>
                    <div className={Style.th}>{table.situation}</div>
                    <div className={Style.th}>{table.resolution}</div>
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