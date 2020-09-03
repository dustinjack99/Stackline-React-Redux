import React, { Component } from 'react';
import { Chart } from 'chart.js';

export default class Charts extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    console.log(this.props);
    const myChartRef = this.chartRef.current.getContext('2d');
    const retail = [];
    const margin = [];
    const weeks = [];
    this.props.item.sales.forEach(sale => {
      retail.push(sale.wholesaleSales);
      margin.push(sale.retailerMargin);
      weeks.push(sale.weekEnding);
    });

    console.log(retail, margin);
    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: weeks,
        datasets: [
          {
            data: retail,
            fill: false,
            borderColor: 'rgb(39, 133, 255)',
          },
          {
            data: margin,
            fill: false,
            borderColor: 'rgb(143, 143, 143)',
          },
        ],
      },
      options: {
        responsive: true,
        // maintainAspectRatio: false,
        legend: { display: false },
        // tooltips: { enabled: false },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                autoSkip: true,

                display: false,
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
        },
      },
    });
  }

  render() {
    return (
      <div className='chartDiv'>
        <h1>Retail Sales</h1>
        <canvas id='myChart' ref={this.chartRef}></canvas>
        <ul className='months'>
          <li>JAN</li>
          <li>FEB</li>
          <li>MAR</li>
          <li>APR</li>
          <li>MAY</li>
          <li>JUN</li>
          <li>JUL</li>
          <li>AUG</li>
          <li>SEP</li>
          <li>OCT</li>
          <li>NOV</li>
          <li>DEC</li>
        </ul>
      </div>
    );
  }
}
