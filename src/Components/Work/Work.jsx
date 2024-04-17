import { ContextWorkExperience } from '../../Content/Context';
import { useContext } from 'react';
import classes from './Work.module.scss';

function Work() {
  const works = useContext(ContextWorkExperience);
  return (
    <div className={classes.works}>
      <h2 className="works-title">Place of work</h2>
      <ul className={classes.organizations}>
        {works.map(({ nameСompany, experience, tasks, usedStack }) => {
          return (
            <li key={nameСompany} className={classes.organization}>
              <div className={classes.basic}>
                <h3 className={classes['organization-title']}>{nameСompany}</h3>
                <span className={classes.time}>{experience}</span>
              </div>
              <div className={classes.description}>
                <ul className={classes.tasks}>
                  {tasks.map(task => (
                    <li className={classes.task}>{task}</li>
                  ))}
                </ul>
              </div>
              <div className={classes['tools-used']}>
                <h3 className={classes['tools-used__title']}>Used Stack</h3>
                <ul className={classes.tools}>
                  {usedStack.map(stack => (
                    <li key={`${stack}-stack`} className={classes.tool}>
                      {stack}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Work;
