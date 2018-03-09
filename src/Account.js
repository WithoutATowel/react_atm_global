import React, { Component } from 'react';

class Account extends Component {
  constructor(props) {
    super(props);
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
        <input type="button" value="Deposit" onClick={ (e) => this.props.onDepositClick(e, this.refs.amount.value, this.props.balanceName) } />
        <input type="button" value="Widthdraw" onClick={ (e) => this.props.onWithdrawClick(e, this.refs.amount.value, this.props.balanceName) } />
        <br />
        <input type="button" value="Transfer" onClick={ (e) => this.props.makeTransfer(e, this.refs.amount.value, this.props.name)} />
      </div>
    )
  }
}

export default Account