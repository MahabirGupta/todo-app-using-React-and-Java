import { useState } from 'react'
import {PropTypes} from 'prop-types'
export default function CounterButton({by,incrementMethod,decrementMethod}) {    

    
    //[0, ƒ] is an array
    //const [firstElt, secondElt] = array
    //const [count, setCount] = array
    // useState() returns an array back
    const [count, setCount] = useState(0)

    // console.log(by);

    function incrementCounterFunction() {
        setCount(count + by)
        incrementMethod(by);
    }

    function decrementCounterFunction() {
        setCount(count - by)
        decrementMethod(by);
        
    }

    return (
        <div className="Counter">
            {/* Remove the display of the individual counters */}
            {/* <span className="count">{count}</span> */}
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
CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 5
}