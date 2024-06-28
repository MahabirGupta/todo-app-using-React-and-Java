import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'

export default function Counter({by}) {    

    //[0, ƒ] is an array
    //const [firstElt, secondElt] = array
    //const [count, setCount] = array
    // useState() returns an array back
    const [count, setCount] = useState(0)

    // console.log(by);

    function incrementCounterFunction() {
        setCount(count + by)
    }

    function decrementCounterFunction() {
        setCount(count - by)
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" 
                        onClick={incrementCounterFunction}
                >+{by}</button>
                <button className="counterButton" 
                        onClick={decrementCounterFunction}
                >-{by}</button>
 
            </div>
        </div>
    )
}
// props are short form for properties
Counter.propTypes = {
    by: PropTypes.number
}

Counter.defaultProps = {
    by: 5
}