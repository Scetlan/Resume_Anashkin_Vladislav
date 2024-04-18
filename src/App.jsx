import Education from './Components/Education/Education';
import { Tabs } from 'antd';
import classes from './style.module.scss';
import BriefInformation from './Components/BriefInformation/BriefInformation';
import AsideInfo from './Components/AsideInfo/AsideInfo';
import Work from './Components/Work/Work';
import { ContextAsideInfo, ContextBriefInformation, ContextEducation, ContextWorkExperience } from './Content/Context';
import { listContentsEn, listContentsRu } from './Content/Content';
import { useEffect, useState } from 'react';

function App() {
  const [translation, setTranslation] = useState('ru');
  const [textBtn, setTextBtn] = useState('English');
  const contentRu = listContentsRu;
  const contentEn = listContentsEn;

  const onClickBtn = () => {
    if (textBtn === 'English') {
      setTextBtn('Russia');
      setTranslation(prevTranslation => (prevTranslation === 'ru' ? 'en' : 'ru'));
    }
    if (textBtn === 'Russia') {
      setTextBtn('English');
      setTranslation(prevTranslation => (prevTranslation === 'en' ? 'ru' : 'en'));
    }
  };

  return (
    <div className={classes.container}>
      <button className={classes.translation} onClick={onClickBtn}>
        <span className={classes.translation__span}>{textBtn}</span>
      </button>
      {translation === 'ru' ? (
        <>
          <ContextAsideInfo.Provider value={contentRu.asideInfo}>
            <AsideInfo photo={contentRu.photo} name={contentRu.name} />
          </ContextAsideInfo.Provider>
          <header className={classes.header}>
            <Tabs defaultActiveKey="1" centered type="card">
              <Tabs.TabPane tab="Brief Information" key="1" itemActiveColor="#000">
                <ContextBriefInformation.Provider value={contentRu.briefInformation}>
                  <BriefInformation />
                </ContextBriefInformation.Provider>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Work Experience" key="2" destroyInactiveTabPane>
                <ContextWorkExperience.Provider value={contentRu.workExperience}>
                  <Work />
                </ContextWorkExperience.Provider>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Education" key="3" destroyInactiveTabPane>
                <ContextEducation.Provider value={contentRu.education}>
                  <Education />
                </ContextEducation.Provider>
              </Tabs.TabPane>
            </Tabs>
          </header>
        </>
      ) : (
        <>
          <ContextAsideInfo.Provider value={contentEn.asideInfo}>
            <AsideInfo photo={contentEn.photo} name={contentEn.name} />
          </ContextAsideInfo.Provider>
          <header className={classes.header}>
            <Tabs defaultActiveKey="1" centered type="card">
              <Tabs.TabPane tab="Brief Information" key="1" itemActiveColor="#000">
                <ContextBriefInformation.Provider value={contentEn.briefInformation}>
                  <BriefInformation />
                </ContextBriefInformation.Provider>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Work Experience" key="2" destroyInactiveTabPane>
                <ContextWorkExperience.Provider value={contentEn.workExperience}>
                  <Work />
                </ContextWorkExperience.Provider>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Education" key="3" destroyInactiveTabPane>
                <ContextEducation.Provider value={contentEn.education}>
                  <Education />
                </ContextEducation.Provider>
              </Tabs.TabPane>
            </Tabs>
          </header>
        </>
      )}
    </div>
  );
}

export default App;
