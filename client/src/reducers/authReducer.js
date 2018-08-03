
const INITIAL_STATE = {

};

const authReducer = (state = INITIAL_STATE, action) => {
    console.log('action', action);

     switch (action.type) {
         
        default:
         return INITIAL_STATE;
     }
}

export default authReducer;