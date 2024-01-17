import {useReducer} from "react";

const ACTIONS = {
    'INCREMENT': 'increment',
    'DECREMENT': 'decrement'
}
function reducer(state, action) {

    switch (action.type) {
        case ACTIONS.INCREMENT: {
            return { 'count': state.count+1};
        }
        case ACTIONS.DECREMENT: {
            return { 'count': state.count-1};
        }
        default:
            return state;
    }
}
export default function Form() {

    function handleIncrement() {
        dispatch({ type: ACTIONS.INCREMENT });
    }

    function handleDecrement() {
        dispatch({ type: ACTIONS.DECREMENT });
    }

    const [state, dispatch] = useReducer(reducer, {'count':0})
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={()=>handleIncrement()}>Increment</button>
            <button onClick={()=> handleDecrement()}>Decrement</button>
        </div>
    )

}