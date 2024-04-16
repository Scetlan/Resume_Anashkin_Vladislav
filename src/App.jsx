import { useState } from 'react';
import { Tabs } from 'antd';
import classes from './style.module.scss';
import BriefInformation from './Components/BriefInformation/BriefInformation';
import AsideInfo from './Components/AsideInfo/AsideInfo';
import Work from './Components/Work/Work';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.container}>
      <AsideInfo />
      <header className={classes.header}>
        <Tabs defaultActiveKey="1" centered type="card">
          <Tabs.TabPane tab="Brief Information" key="1" itemActiveColor="#000">
            <BriefInformation />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Work Experience" key="2" destroyInactiveTabPane>
            <Work />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Education" key="3" destroyInactiveTabPane></Tabs.TabPane>
        </Tabs>
      </header>
      <main className=""></main>
    </div>
  );
}

export default App;
