import classes from './BriefInformation.module.scss';

const BriefInformation = () => {
  return (
    <div className={classes['tab-one']}>
      <div className="about-me">
        <h1 className="title">About me</h1>
        <p className={classes.desc}>
          Я увлечен программированием. С помощью неисчерпаемой мотивации и трудолюбия непрерывно обучаюсь новому, изучаю
          новые технология, с помощью проб и ошибок становлюсь лучше как разработчик. Мне правится создавать
          действительно полезные продукты, выстраивая согласованную архитектуру в соответствии с лучшими практиками.
        </p>
      </div>
      <div className={classes.skills}>
        <h2 className="title">Skills</h2>
        <ul className={classes['list-blog']}>
          <li className={classes.skill}>Kotlin</li>
          <li className={classes.skill}>SQL</li>
          <li className={classes.skill}>Java</li>
          <li className={classes.skill}>Go</li>
        </ul>
      </div>
      <div className={classes.languages}>
        <h1 className={classes.title}>Languages</h1>
        <ul className={classes['list-blog']}>
          <li className={classes.lang}>Russian | Native</li>
          <li className={classes.lang}>English | Flue</li>
        </ul>
      </div>
    </div>
  );
};

export default BriefInformation;
