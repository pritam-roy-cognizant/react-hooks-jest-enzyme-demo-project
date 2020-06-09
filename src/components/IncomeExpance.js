import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function IncomeExpance() {
  const { transction } = useContext(GlobalContext);
  const amounts = transction.map(transaction => transaction.Amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div>
      {/* <h4>Income : {income} || Expense : {expense}</h4> */}
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">{expense}</p>
        </div>
      </div>

      <style jsx>{`
        h4 {
          margin: 0;
          text-transform: uppercase;
        }
        
        .inc-exp-container {
          background-color: #fff;
          box-shadow: var(--box-shadow);
          padding: 20px;
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
        }
        
        .inc-exp-container > div {
          flex: 1;
          text-align: center;
        }
        
        .inc-exp-container > div:first-of-type {
          border-right: 1px solid #dedede;
        }
        
        .money {
          font-size: 20px;
          letter-spacing: 1px;
          margin: 5px 0;
        }
        
        .money.plus {
          color: #2ecc71;
        }
        
        .money.minus {
          color: #c0392b;
        }
        
       `}</style>
 

    </div>
  )
}

export default IncomeExpance


