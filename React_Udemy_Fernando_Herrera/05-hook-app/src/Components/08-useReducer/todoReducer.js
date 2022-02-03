//Delete/toggle: paylod = id
export const todoReducer = (state, action) => {
    if (action) {
        switch (action.type) {
            case 'add':
                state = [...state, action.payload];
                break;
            case 'delete':
                state = state.filter((todo) => todo.id !== action.payload);
                break;
            case 'toggle':
                state = state.map(todo =>
                    (todo.id === action.payload)
                        ? {...todo, done: !todo.done}
                        : todo
                );
                break;
            default:
                break;
        }
    }
    return state;
};
