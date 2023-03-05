import Style from './header.module.scss'

const header = () => {
  return (
    <header className={Style.wrapper}>
      <div className={Style.title}>
        推論チャレンジ2023
      </div>
    </header>
  )
}

export default header