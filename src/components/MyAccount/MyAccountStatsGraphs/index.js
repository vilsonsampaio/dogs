import React from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

import styles from './styles.module.css';

const MyAccountStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const accessArray = data.map(data => Number(data.acessos));
    const accessSum = accessArray.reduce((acc, cur) => acc + cur);

    setTotal(accessSum);

    const graphDataArray = data.map(data => {
      return {
        x: data.title,
        y: Number(data.acessos),
      }
    });

    setGraph(graphDataArray);
  }, [data]);

  return (
    <section className={`animeLeft ${styles.graph}`}>

      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>


      <div className={styles.graphItem}>
        <VictoryPie 
          data={graph}
          innerRadius={50}
          padding={{
            top: 20,
            bottom: 20,
            left: 80,
            right: 80,
          }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#FFF',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }} 
        />
      </div>

      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar data={graph} alignment="start" />
        </VictoryChart>
      </div>
    </section>
  );
}

export default MyAccountStatsGraphs;
