import Head from 'next/head'
import Style from './index.module.scss'

const TopContainer = () => {
  return (
    <>
      <Head>
        <title>推論チャレンジ2023</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="推論チャレンジ2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={Style.wrapper}>
        
      </div>
    </>
  )
}

export default TopContainer