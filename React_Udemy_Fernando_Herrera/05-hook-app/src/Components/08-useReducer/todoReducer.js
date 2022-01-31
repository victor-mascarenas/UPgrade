export const todoReducer = (state, action) => {
    if (action) {
        switch (action.type) {
            case 'add':
                state = [...state, action.payload];
                break;
        
            default:
                break;
        }
    }
    return state;
};
