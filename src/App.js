
// import LearningComponent from './components/learning-examples/LearningComponent';

// import FirstComponent from './components/learning-examples/FirstComponent'
// // braces {} indicate that {FifthComponent} is not a default export
// import {FifthComponent} from './components/learning-examples/FirstComponent'
// import SecondComponent from './components/learning-examples/SecondComponent'
// import ThirdComponent from './components/learning-examples/ThirdComponent'
// import FourthComponent from './components/learning-examples/FourthComponent'

import './App.css';
import Counter from './components/counter/Counter'

function App() {
  return (
    <div className="App">
      <Counter by={1}/>
      <Counter by={2}/>
      <Counter by={5}/>
      {/* <PlayingWithProps property1= "value1" property2= "value2"/> */}
    </div>
  )
}

//{property1: 'value1', property2: 'value2'}
// function PlayingWithProps(properties) {
  
//   console.log(properties)
//   console.log(properties.property1)
//   console.log(properties.property2)
  
//   return (
//     <div>Props</div>
//   )
// }

// function PlayingWithProps( {property1, property2} ) {
//   console.log(property1)
//   console.log(property2)
  
  
//   return (
//     <div>Props</div>
//   )
// }


export default App;
