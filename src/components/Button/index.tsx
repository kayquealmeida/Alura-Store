import style from './Button.module.scss';

export default function Button({tittle} : {tittle: string}) {
  return(
    <button className={style.button}>
      {tittle}
    </button>
  )
}