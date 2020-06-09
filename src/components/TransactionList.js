import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transction from './Transction'
function TransactionList() {
    const { transction } = useContext(GlobalContext);
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transction.map((data) => (
                    <Transction key={data.id} transction={data} />
                ))}

            </ul>

            <style jsx>{`
                        h3 {
                            border-bottom: 1px solid #bbb;
                            padding-bottom: 10px;
                            margin: 40px 0 10px;
                          }

                          .list {
                            list-style-type: none;
                            padding: 0;
                            margin-bottom: 40px;
                          }

            `}</style>
        </div>
    )
}

export default TransactionList

