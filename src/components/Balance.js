import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


function Balance() {
    const { transction } = useContext(GlobalContext);
    const amounts = transction.map(transaction => transaction.Amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    
    return (
        <div>
            <h4>Your Balance : <span>${total}</span></h4> 
        </div>
    )
}

export default Balance
