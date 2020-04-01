import React, { useState } from 'react';
import Charts from './Charts';
import ModelsSelector from './ModelsSelector';

const styles = {
  wrapper: {
    display: 'flex',
  },
};

const defaultState = {
  USD: true,
  EUR: true,
  RUB: true,
};

const App = () => {
  const [chartsSelected, setChartsSelected] = useState(defaultState);
  return (
    <div className="App">
      <h3>VGS Charts</h3>
      <div className="wrapper" style={styles.wrapper}>
        <Charts chartsSelected={chartsSelected} />
        <ModelsSelector
          chartsSelected={chartsSelected}
          setChartsSelected={setChartsSelected}
        />
      </div>
    </div>
  );
};

export default App;
