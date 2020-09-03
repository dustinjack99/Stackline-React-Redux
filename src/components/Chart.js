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
        // responsive: true,
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
    const months = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];
    return (
      <div className='chartDiv'>
        <h1 className='chartTitle'>Retail Sales</h1>
        <canvas id='chart' ref={this.chartRef}></canvas>
        <ul className='months'>
          {months.map(month => (
            <li classname='month'>{month}</li>
          ))}
        </ul>
      </div>
    );
  }
}
