import Education from './Components/Education/Education';
import { Tabs } from 'antd';
import classes from './style.module.scss';
import BriefInformation from './Components/BriefInformation/BriefInformation';
import AsideInfo from './Components/AsideInfo/AsideInfo';
import Work from './Components/Work/Work';
import listContents from './Content/Content';
import { ContextAsideInfo, ContextBriefInformation, ContextEducation, ContextWorkExperience } from './Content/Context';

function App() {
  const content = listContents;
  return (
    <div className={classes.container}>
      <ContextAsideInfo.Provider value={content.asideInfo}>
        <AsideInfo photo={content.photo} />
      </ContextAsideInfo.Provider>
      <header className={classes.header}>
        <Tabs defaultActiveKey="1" centered type="card">
          <Tabs.TabPane tab="Brief Information" key="1" itemActiveColor="#000">
            <ContextBriefInformation.Provider value={content.briefInformation}>
              <BriefInformation />
            </ContextBriefInformation.Provider>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Work Experience" key="2" destroyInactiveTabPane>
            <ContextWorkExperience.Provider value={content.workExperience}>
              <Work />
            </ContextWorkExperience.Provider>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Education" key="3" destroyInactiveTabPane>
            <ContextEducation.Provider value={content.education}>
              <Education />
            </ContextEducation.Provider>
          </Tabs.TabPane>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
