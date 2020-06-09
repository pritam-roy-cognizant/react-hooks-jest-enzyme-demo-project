import React, { createContext, useReducer } from 'react';
import Appreducer from './Appreducer';
//Initial State
const initialState = {
    transction: []
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Appreducer, initialState);
    //delete Action
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSCTION",
            payload: id
        })
    }

    //Add
    function addTransaction(transction) {
        dispatch({
            type: "ADD_TRANSCTION",
            payload: transction
        })
    }

    //Edit
    function editTransaction(transction) {
        dispatch({
            type: "EDIT_TRANSCTION",
            payload: transction
        })
    }


    return (
        <GlobalContext.Provider value={{ transction: state.transction, deletef: deleteTransaction, addTransaction: addTransaction, editTransaction:editTransaction, transactionEdit: state.transactionEdit }}>
            {children}
        </GlobalContext.Provider>
    )
}