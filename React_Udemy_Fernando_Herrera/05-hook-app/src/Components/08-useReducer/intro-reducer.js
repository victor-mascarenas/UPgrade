const todosInitial = [{//Estado inicial
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = todosInitial, action) => {
    if (action) {
        if (action.type === 'agregar') {
            state = [...state, action.payload];
        }
    }
    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};
const action = {
    type: 'agregar',
    payload: newTodo
};
todos = todoReducer(todos, action);

console.log(todos);