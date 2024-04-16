import classes from './Work.module.scss';

const Work = () => {
  return (
    <div className={classes.works}>
      <h2 className="works-title">Place of work</h2>
      <ul className={classes.organizations}>
        <li className={classes.organization}>
          <div className={classes.basic}>
            <h3 className={classes['work-title']}>Tinkoff</h3>
            <span className={classes.time}>2020-н.в</span>
          </div>
          <div className={classes.description}>
            <ul className={classes.tasks}>
              <li className={classes.task}>
                Я увлечен программированием. С помощью неисчерпаемой мотивации и трудолюбия непрерывно обучаюсь новому,
                изучаю новые технология, с помощью проб и ошибок становлюсь лучше как разработчик. Мне правится
                создавать действительно полезные продукты, выстраивая согласованную архитектуру в соответствии с лучшими
                практиками.
              </li>
              <li className={classes.task}>
                Я увлечен программированием. С помощью неисчерпаемой мотивации и трудолюбия непрерывно обучаюсь новому,
                изучаю новые технология, с помощью проб и ошибок становлюсь лучше как разработчик. Мне правится
                создавать действительно полезные продукты, выстраивая согласованную архитектуру в соответствии с лучшими
                практиками.
              </li>
              <li className={classes.task}>
                Я увлечен программированием. С помощью неисчерпаемой мотивации и трудолюбия непрерывно обучаюсь новому,
                изучаю новые технология, с помощью проб и ошибок становлюсь лучше как разработчик. Мне правится
                создавать действительно полезные продукты, выстраивая согласованную архитектуру в соответствии с лучшими
                практиками.
              </li>
            </ul>
            <div className={classes['tools-used']}>
              <h3 className={classes['tools-used__title']}>Tools used</h3>
              <ul className={classes.tools}>
                <li className={classes.tool}>SQL</li>
                <li className={classes.tool}>SQL</li>
                <li className={classes.tool}>SQL</li>
                <li className={classes.tool}>SQL</li>
                <li className={classes.tool}>SQL</li>
                <li className={classes.tool}>SQL</li>
              </ul>
            </div>
          </div>
        </li>
        <li className={classes.organization}>
          <div className={classes.basic}>
            <h3 className={classes['work-title']}>Tinkoff</h3>
            <span className={classes.time}>2020-н.в</span>
          </div>
          <div className={classes.description}>
            <ul className="tasks">
              <li className={classes.task}>Я увлечен программированием. </li>
              <li className={classes.task}>Я увлечен программированием. </li>
              <li className={classes.task}>Я увлечен программированием. </li>
            </ul>
            <div className={classes['tools-used']}>
              <h3 className={classes['tools-used__title']}>Tools used</h3>
              <ul className={classes.tools}>
                <li className={classes.tool}>SQL</li>
                <li className={classes.tool}>SQL</li>
                <li className={classes.tool}>SQL</li>
                <li className={classes.tool}>SQL</li>
                <li className={classes.tool}>SQL</li>
                <li className={classes.tool}>SQL</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Work;
