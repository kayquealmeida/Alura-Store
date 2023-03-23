import logo from '../../assets/images/logo.svg';
import style from './Header.module.scss';

export default function Header() {
  return (
    <div className={style.header}>
      <img src={logo} alt="Logo" />
    </div>
  )
}   