import classes from './Aside.module.scss';
import { useContext } from 'react';
import { ContextAsideInfo } from '../../Content/Context';

const AsideInfo = ({ photo }) => {
  const contacts = useContext(ContextAsideInfo);

  return (
    <aside className={classes.aside__info}>
      <img className={classes.avatar} src={photo} alt="" />
      <ul className={classes.contact}>
        {contacts.map(({ id, svg, link, alt, text }) => (
          <li key={id} className={classes.contact__item}>
            <img className={classes.img__icon} src={svg} alt={alt} />
            <a className={classes.link} href={link}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideInfo;
