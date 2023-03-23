import Card from './Card'
import style from './CardsDepartamento.module.scss';
import productImage from '../../../assets/images/sapato.svg'


export default function Cards(
  {cardTittle}: 
  {cardTittle: string}
){
  return (
    <div className={style.cardsContainer}>
      <h2>
        {cardTittle}
      </h2>
      <div className={style.cardList}>
        <Card
          cardImage={productImage}
          altImage='Sapato'
          productName='Sapato'
          productPrice='R$ 500,00'
        />
        <Card
          cardImage={productImage}
          altImage='Sapato'
          productName='Sapato'
          productPrice='R$ 500,00'
        />
        <Card
          cardImage={productImage}
          altImage='Sapato'
          productName='Sapato'
          productPrice='R$ 500,00'
        />
      </div>
    </div>
  )
}