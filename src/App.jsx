import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return(
    <Counter></Counter>
  )
 
  // const [count, setCount] = useState(0)

//   return (
//     <div className='App'>
//       {/* <button onClick={}></button> */}
//       <Product name = "Laptop" price="290000"></Product>
//       <Product name = "pHONE" price = "2000000"></Product>
//     </div>
//   )
// }
// function Product(props){
//   return(
//     <div className='product'>
//       <h1>Name = {props.name} price = {props.price }</h1>
     
//     </div>
//   )
}

function Counter () {
  const [count,setCount] = useState(1)
// 2nd Option value increase decrease korar
  const increaseCount = () =>setCount(count+1);
  const decreaseCount = () =>setCount(count-1);
  
// first poddoti value increase , decrease korar

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return(
    <div >
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>DecreaseCount</button>
    </div>
  )
}


export default App
