import classes from './Education.module.scss';
import { ContextEducation } from '../../Content/Context';
import { useContext } from 'react';

function Education() {
  const { publicEducations, courses } = useContext(ContextEducation);
  return (
    <div className={classes.education}>
      <div className={classes.institutions}>
        <h2 className="institution-title">Institution</h2>
        <ul className={classes.organizations}>
          {publicEducations.map(({ institution, experience }) => {
            return (
              <li key={institution} className={classes.organization}>
                <div className="basic">
                  <h3 className={classes['organization-title']}>{institution}</h3>
                  <span className={classes.time}>{experience}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.courses}>
        <h2 className="course-title">Additional courses</h2>
        <ul className={classes.organizations}>
          {courses.map(({ institution, experience, topic, link, сertificate }) => {
            return (
              <li key={`${institution}-courses`} className={classes.organization}>
                <div className={classes.basic}>
                  <h3 className={classes['organization-title']}>{institution}</h3>
                  <span className={classes.time}>{experience}</span>
                </div>
                <p className={classes.desc}>Topic: {topic}</p>
                {link === '' ? null : (
                  <a className={classes.desc} href={link}>
                    {сertificate}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Education;
