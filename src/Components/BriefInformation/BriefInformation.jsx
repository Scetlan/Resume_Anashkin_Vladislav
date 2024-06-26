import { ContextBriefInformation } from '../../Content/Context';
import { useContext } from 'react';
import classes from './BriefInformation.module.scss';

function BriefInformation() {
  const { skills, aboutMeText, languages } = useContext(ContextBriefInformation);

  return (
    <div className={classes['tab-one']}>
      <div className="about-me">
        <h2 className="title">About me</h2>
        <p className={classes.desc}>{aboutMeText}</p>
      </div>
      <div className={classes.skills}>
        <h2 className="title">Skills</h2>
        <ul className={classes['list-blog']}>
          {skills.map(skill => (
            <li key={skill} className={classes.skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.languages}>
        <h2 className={classes.title}>Languages</h2>
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
}

export default BriefInformation;
