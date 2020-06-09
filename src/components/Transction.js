import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'; 

function Transction(data) {
    // const { deleteTransction } = useContext(GlobalContext);
    const { deletef, editTransaction} = useContext(GlobalContext);
    const sign = (data.transction.Amount < 0) ? '-' : '+';
    return (
        <div>
            <li className={(sign === '+' ) ? 'plus' : 'minus'}>
                {data.transction.Text} : 
                <span> {data.transction.Amount}</span> 
                <span><button  onClick={() => editTransaction(data.transction.id)} >Edit</button><button  onClick={() => deletef(data.transction.id)} >Delete</button></span>
            </li>

            <style jsx>{`
                       li {
                        background-color: #fff;
                        box-shadow: var(--box-shadow);
                        color: #333;
                        display: flex;
                        justify-content: space-between;
                        position: relative;
                        padding: 10px;
                        margin: 10px 0;
                      }
                      li.plus {
                        border-right: 5px solid #2ecc71;
                      }
                      
                      li.minus {
                        border-right: 5px solid #c0392b;
                      }
                      
                      .delete-btn {
                        cursor: pointer;
                        background-color: #e74c3c;
                        border: 0;
                        color: #fff;
                        font-size: 20px;
                        line-height: 20px;
                        padding: 2px 5px;
                        position: absolute;
                        top: 50%;
                        left: 0;
                        transform: translate(-100%, -50%);
                        opacity: 0;
                        transition: opacity 0.3s ease;
                      }
                      
                      li:hover .delete-btn {
                        opacity: 1;
                      }

            `}</style>
        </div>
    )
}

export default Transction

