export const todoReducer = (state, action) => {
    if (action) {
        switch (action.type) {
            case 'add':
                state = [...state, action.payload];
                break;
            case 'delete':
                state = state.filter((todo) => todo.id !== action.payload);
                break;
            default:
                break;
        }
    }
    return state;
};
