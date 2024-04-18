import { ContextWorkExperience } from '../../Content/Context';
import { useContext } from 'react';
import classes from './Work.module.scss';

function Work() {
  const works = useContext(ContextWorkExperience);
  return (
    <div className={classes.works}>
      <h2 className="works-title">Place of work</h2>
      <ul className={classes.organizations}>
        {works.map(({ nameСompany, experience, tasks, usedStack, link, jobTitle }) => {
          return (
            <li key={nameСompany} className={classes.organization}>
              <div className={classes.basic}>
                <h3 className={classes['organization-title']}>
                  <a className={classes['organization-title']} href={link}>
                    {nameСompany}
                  </a>
                </h3>
                <span className={classes.time}>{experience}</span>
              </div>
              <div className={classes.description}>
                <p className={classes.jobTitle}>Job Title: {jobTitle}</p>
                <ul className={classes.tasks}>
                  {tasks.map(task => (
                    <li className={classes.task}>{task}</li>
                  ))}
                </ul>
              </div>
              {usedStack === '' ? null : (
                <ul className={classes['tools-used']}>
                  <li className={classes['tools-used__container']}>
                    <h3 className={classes['tools-used__title']}>Programming</h3>
                    <ul className={classes.tools}>
                      {usedStack.programming.map(stack => (
                        <li key={`${stack}-stack`} className={classes.tool}>
                          {stack}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className={classes['tools-used__container']}>
                    <h3 className={classes['tools-used__title']}>Data Base</h3>
                    <ul className={classes.tools}>
                      {usedStack.database.map(stack => (
                        <li key={`${stack}-stack`} className={classes.tool}>
                          {stack}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className={classes['tools-used__container']}>
                    <h3 className={classes['tools-used__title']}>DevOps</h3>
                    <ul className={classes.tools}>
                      {usedStack.devOps.map(stack => (
                        <li key={`${stack}-stack`} className={classes.tool}>
                          {stack}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className={classes['tools-used__container']}>
                    <h3 className={classes['tools-used__title']}>Technologies</h3>
                    <ul className={classes.tools}>
                      {usedStack.technologies.map(stack => (
                        <li key={`${stack}-stack`} className={classes.tool}>
                          {stack}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Work;
