import React, { Component } from 'react';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  depositClick = (e) => {
    this.props.onDepositClick(e, this.refs.amount.value, this.props.balanceName);
    this.refs.amount.value = '';
  }

  withdrawClick = (e) => {
    this.props.onWithdrawClick(e, this.refs.amount.value, this.props.balanceName);
    this.refs.amount.value = '';
  }

  transferClick = (e) => {
    this.props.makeTransfer(e, this.refs.amount.value, this.props.name);
    this.refs.amount.value = '';
  }

  render() {
    let balanceClass = 'balance';
    if (this.props.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.props.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this.depositClick} />
        <input type="button" value="Widthdraw" onClick={this.withdrawClick} />
        <br />
        <input type="button" value="Transfer" onClick={this.transferClick} />
      </div>
    )
  }
}

export default Account