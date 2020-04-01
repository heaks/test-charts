import React from 'react';
import { models } from './ENUM'

const ModelsSelectors = ({ chartsSelected, setChartsSelected }) => (
  <div className={'models-selector'}>
    {models.map(label => (
      <div>
        <label htmlFor={label}>{label}</label>
        <input
          type="checkbox"
          id={label}
          defaultChecked={chartsSelected[label]}
          onClick={() => {
            setChartsSelected({ ...chartsSelected, [label]: !chartsSelected[label] })
          }}
        />
      </div>
    ))}
  </div>
);

export default ModelsSelectors;
