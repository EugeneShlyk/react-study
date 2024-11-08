import style from './study.module.scss';

export default function Study() {


  const clickHandler = (evt) => {
    setTimeout(() => {
      evt.target.style.backgroundColor = 'black';
    }, 2000)
  }

  return (
    <div className={style.study}>
      <div className={style.study__output} onClick={clickHandler}></div>
    </div>
  );

}

