import { useContext } from 'react';
import classes from './BriefInformation.module.scss';
import { ContextBriefInformation } from '../../Content/Context';

const BriefInformation = () => {
  const { skills, aboutMeText, languages } = useContext(ContextBriefInformation);

  return (
    <div className={classes['tab-one']}>
      <div className="about-me">
        <h1 className="title">About me</h1>
        <p className={classes.desc}>{aboutMeText}</p>
      </div>
      <div className={classes.skills}>
        <h2 className="title">Skills</h2>
        <ul className={classes['list-blog']}>
          {skills.map(({ id, text }) => (
            <li key={id} className={classes.skill}>
              {text}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.languages}>
        <h1 className={classes.title}>Languages</h1>
        <ul className={classes['list-blog']}>
          {languages.map(({ id, text }) => (
            <li key={id} className={classes.lang}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BriefInformation;
