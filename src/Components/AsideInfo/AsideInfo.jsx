import classes from './Aside.module.scss';
import { ContextAsideInfo } from '../../Content/Context';
import { useContext } from 'react';

function AsideInfo({ photo, name }) {
  const contacts = useContext(ContextAsideInfo);

  return (
    <aside className={classes.aside__info}>
      {photo === '' ? null : <img className={classes.avatar} src={photo} alt="photo" />}
      <div className="blog__contact">
        <h1 className={classes.title__user}>{name}</h1>
        <ul className={classes.contact}>
          {contacts.map(({ svg, link, alt, text }) => (
            <li key={alt} className={classes.contact__item}>
              <img className={classes.img__icon} src={svg} alt={alt} />
              <a className={classes.link} href={link}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default AsideInfo;
