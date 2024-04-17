import { useContext } from 'react';
import classes from './Education.module.scss';
import { ContextEducation } from '../../Content/Context';

const Education = () => {
  const { publicEducations, courses } = useContext(ContextEducation);
  return (
    <div className={classes.education}>
      <div className={classes.institutions}>
        <h2 className="institution-title">Institution</h2>
        <ul className={classes.organizations}>
          {publicEducations.map(({ id, institution, experience }) => {
            return (
              <li key={id} className={classes.organization}>
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
          {courses.map(({ id, institution, experience, topic }) => {
            return (
              <li key={id} className={classes.organization}>
                <div className={classes.basic}>
                  <h3 className={classes['organization-title']}>{institution}</h3>
                  <span className={classes.time}>{experience}</span>
                </div>
                <p className={classes.desc}>Topic: {topic}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Education;