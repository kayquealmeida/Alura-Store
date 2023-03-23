import style from './Input.module.scss';

export default function Input(
  {labelTittle, inputName, inputId, placeholderText, requiredBoolean}: {labelTittle: string, inputName: string, inputId: string, placeholderText: string, requiredBoolean: boolean}
  ) {
  return(
    <div className={style.inputContainer}>
      <label htmlFor={inputName}>
        {labelTittle}
      </label>
      <input 
        type="text" 
        name={inputName} 
        id={inputId} 
        placeholder={placeholderText}
        required={requiredBoolean}
        />
    </div>
  )
}