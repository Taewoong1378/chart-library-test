import c3 from 'c3';
import { useEffect } from 'react';

export const Chart = () => {
  useEffect(() => {
    c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25],
        ],
      },
    });
  }, []);

  return <div id="chart">123</div>;
};
