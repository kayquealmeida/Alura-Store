import style from '../Input/Input.module.scss';

export default function Select(
  {labelTittle, selectName, selectId}:
  {
    labelTittle: string,
    selectName: string,
    selectId: string,
  }){

  return(
    <div className={style.inputContainer}>
      <label htmlFor={selectName}>
        {labelTittle}
      </label>
      <select name={selectName} id={selectId}>
        <option value="faminino">Feminino</option>
        <option value="infantil">Infantil</option>
        <option value="masculino">Masculino</option>
      </select>
    </div>
  )
}