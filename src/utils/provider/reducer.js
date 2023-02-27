
export const initialState = {
    toggle: true,
    user: null,
};


const reducer = (state, action) => {
    // console.log("Reducer: ", action )
    switch(action.type){
        // TOGGLE_DARK/LIGHT MODE:
        case 'TOGGLE_MODE':
            return {
                ...state,
                toggle: action.toggle
            }
       
        // Add User:
        case 'ADD_USER':
            return {
                ...state,
                user: action.user
            }


        // Default:
        default:
            return state;
    }
}


export default reducer;