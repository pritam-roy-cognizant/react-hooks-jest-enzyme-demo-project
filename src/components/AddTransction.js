import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';

function AddTransction() {
    const [Text, setText] = React.useState('');
    const [Amount, setAmount] = React.useState(0);
    const { addTransaction ,transactionEdit,transction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: (transactionEdit && transactionEdit.id) ? transactionEdit.id : Math.floor(Math.random() * 100000000),
            Text,
            Amount: +Amount
        }
        addTransaction(newTransaction);
        setText('');
        setAmount('');
    }


    useEffect(() => {
      setText((transactionEdit) ? transactionEdit.Text : '');
      setAmount((transactionEdit) ? transactionEdit.Amount : '');
    }, [transactionEdit]);

    let buttonText = (transactionEdit && transactionEdit.id) ? 'Edit' : 'Add';

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={Text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." data-test='component-addtransaction-input'/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount </label>
                    <input type="number" placeholder="Enter amount..." value={Amount} onChange={(e) => setAmount(e.target.value)} data-test='component-addtransaction-amount' />
                    <br />(negative - expense, positive + income)

                </div>
    <button className="btn">{buttonText}</button>
            </form>

            <style jsx>{`
                              h3 {
                                border-bottom: 1px solid #bbb;
                                padding-bottom: 10px;
                                margin: 40px 0 10px;
                              }
                              label {
                                display: inline-block;
                                margin: 10px 0;
                              }
                              
                              input[type='text'],
                              input[type='number'] {
                                border: 1px solid #dedede;
                                border-radius: 2px;
                                display: block;
                                font-size: 16px;
                                padding: 10px;
                                width: 100%;
                              }
                              
                              .btn {
                                cursor: pointer;
                                background-color: #9c88ff;
                                box-shadow: var(--box-shadow);
                                color: #fff;
                                border: 0;
                                display: block;
                                font-size: 16px;
                                margin: 10px 0 30px;
                                padding: 10px;
                                width: 100%;
                              }
                              
                              .btn:focus,
                              .delete-btn:focus {
                                outline: 0;
                              }
                              
            `}</style>
        </div>
    )
}

export default AddTransction

