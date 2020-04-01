import React from 'react';
import Chart from './Chart';

const models = ['USD', 'EUR', 'RUB'];
const palette = ['green', 'blue', 'purple'];

const Charts = ({ chartsSelected }) => {
  return (
    <div className="charts">
      {models.map((e, i) => (
        chartsSelected[e] ? (<Chart key={e} name={e} color={palette[i]} />) : null
      ))}
    </div>
  );
};

export default Charts;
