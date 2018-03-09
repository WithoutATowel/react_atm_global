import React, { Component } from 'react';
import logo from './ga.png';

import Account from './Account';

class App extends Component {
  constructor() {
    super()
    this.state = {
      checkingBalance: 0,
      savingsBalance: 0
    }
  }

  handleDepositClick = (e, amount, name) => {
    e.preventDefault();
    if (isNaN(amount)) {
      console.log("Not a number");
    }
    else {
      let newBalance = parseInt(this.state[name]) + parseInt(amount);
      this.setState({
        [name]: newBalance
      })
    }
  }

  handleWithdrawClick = (e, amount, name) => {
    e.preventDefault();
    if (isNaN(amount) || amount < 0) {
      console.log("Not a valid number");
    } else if (amount > this.state[name]) {
      console.log("Naw dawg you don't have that much");
    } else {
      let newBalance = parseInt(this.state[name]) - parseInt(amount);
      this.setState({
        [name]: newBalance
      })
    }
  }

  makeTransfer = (e, amount, name) => {
    e.preventDefault();
    let newChecking = null;
    let newSavings = null;
    if (name === "Checking") {
      newChecking = this.state.checkingBalance - parseInt(amount);
      newSavings = this.state.savingsBalance + parseInt(amount);
    } else if (name === "Savings") {
      newChecking = this.state.checkingBalance + parseInt(amount);
      newSavings = this.state.savingsBalance - parseInt(amount);
    }
    this.setState({
      checkingBalance: newChecking,
      savingsBalance: newSavings
    })
  }

  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <Account 
          name="Checking"
          balanceName="checkingBalance" 
          balance={this.state.checkingBalance}
          onDepositClick={this.handleDepositClick}
          onWithdrawClick={this.handleWithdrawClick}
          makeTransfer={this.makeTransfer} 
        />
        <Account 
          name="Savings" 
          balanceName="savingsBalance"
          balance={this.state.savingsBalance}
          onDepositClick={this.handleDepositClick}
          onWithdrawClick={this.handleWithdrawClick}
          makeTransfer={this.makeTransfer} 
        />
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
