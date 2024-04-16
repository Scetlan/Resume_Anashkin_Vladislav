import classes from './Aside.module.scss';
import photo from './photo/photo.jpeg';
import gitHub from './public/icons8-github.svg';
import telegram from './public/icons8-telegtam.svg';
import phone from './public/icons-phone.svg';

const AsideInfo = () => {
  return (
    <aside className="aside__info">
      <img className={classes.avatar} src={photo} alt="" />
      <ul className={classes.contact}>
        <li className={classes.contact__item}>
          <img className={classes.img__icon} src={gitHub} alt="gitHub" />
          <a className={classes.link} href="https://github.com/vladis62">
            github.com/vladis62
          </a>
        </li>
        <li className={classes.contact__item}>
          <img className={classes.img__icon} src={telegram} alt="telegramm" />
          <a className={classes.link} href="https://t.me/vlad_os62">
            @vlad_os62
          </a>
        </li>
        <li className={classes.contact__item}>
          <img className={classes.img__icon} src={phone} alt="phone" />
          <a className={classes.link} href="tel:+79105700772">
            +7 (910) 570-07-72
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default AsideInfo;
