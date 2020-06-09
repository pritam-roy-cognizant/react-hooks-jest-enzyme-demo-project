export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSCTION':
            return {
                ...state,
                transction : state.transction.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSCTION': 
        let arrayIndex =  state.transction.findIndex(x => x.id ==action.payload.id);
        let newItem = state.transction.map((item,index) => {
            if(arrayIndex == index){
                return {...item,...action.payload}
            }
            return item;
        });
        
        return {
            ...state,
            transction : (state.transction.some(el => el.id == action.payload.id)) ? newItem : [...state.transction,action.payload],
            transactionEdit:''
        }
        case 'EDIT_TRANSCTION': 
        return {
            ...state,
            transactionEdit : state.transction.find(x => x.id === action.payload)
        }
        default : 
        return state;
    }
}



  