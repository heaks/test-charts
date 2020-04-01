import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const generateUrl = (number) => `https://qrng.anu.edu.au/API/jsonI.php?length=${number}&type=uint8`;

const Graph = ({ name, color }) => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    fetch(generateUrl(10)).then(res => res.json()).then(({ data }) => {
      setGraphData(data);
    });

    const update = setInterval(() => {
      fetch(generateUrl(1)).then(res => res.json()).then(({ data }) => {
        const updatedData = graphData.slice(1, 10);
        updatedData.push(data[0]);
        setGraphData(updatedData);
      });
    }, 5000);
    return () => { clearInterval(update) };
  }, []);

  return (
    <div>
      <p>{name} Chart</p>
      <Line data={{ datasets: [{ data: graphData, label: name, borderColor: color }], labels: [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10] }}/>
    </div>
  );
};

export default Graph;
