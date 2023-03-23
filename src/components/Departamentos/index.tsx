import CardsDepartamentos from './CardsDepartamentos';
import style from './Departamentos.module.scss';


export default function Departamentos() {
  return(
    <div className={style.departamentosContainer}>
      <h2>
        DEPARTAMENTOS
      </h2>
      <CardsDepartamentos 
        cardTittle='Feminino'
      />
      <CardsDepartamentos 
        cardTittle='Infantil'
      />
      <CardsDepartamentos 
        cardTittle='Masculino'
      />
    </div>
  )
}