import style from './Card.module.scss';

export default function Cards(
  {cardImage, altImage, productName, productPrice}: 
  {cardImage?: string, altImage: string, productName: string, productPrice: string}
){
  return (
      <div className={style.card}>
        <img src={cardImage} alt={altImage}/>
          <span className={style.namePrice}>
            <p>{productName}</p>
            <p>{productPrice}</p>
          </span>
      </div>
  )
}