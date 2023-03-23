import logo from '../../assets/images/logo.svg';
import style from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={style.footer}>
      <img src={logo} alt="Logo"/>
    </div>
  )
}   