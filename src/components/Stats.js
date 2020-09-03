import React, { Component } from 'react';
export default class Stats extends Component {
  convertMoney(num) {
    let newNum = num.toString().replace(/.{3}/g, '$&,');
    return '$' + newNum.substr(0, newNum.length - 1);
  }

  render() {
    // const { item } = this.props;
    return (
      <div className='statsDiv'>
        <div className='saleColumn'>
          <h3>Week Ending</h3>
          <h3>Retail Sales</h3>
          <h3>Wholesale Sales</h3>
          <h3>Units Sold</h3>
          <h3>Retailer Margin</h3>
        </div>
        {this.props.item.sales.map((sale, i) => (
          <div key={i} className='saleItem'>
            <p>{sale.weekEnding}</p>
            <p>{this.convertMoney(sale.retailSales)}</p>
            <p>{this.convertMoney(sale.wholesaleSales)}</p>
            <p>{sale.unitsSold}</p>
            <p>{this.convertMoney(sale.retailerMargin)}</p>
          </div>
        ))}
      </div>
    );
  }
}
