import React from 'react';
import {connect, useDispatch, useSelector} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {

	const count = useSelector((state) => state)
	const dispatch = useDispatch()
	return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}


// function mapStateToProps(globalState) {
// 	return {
// 		count: globalState
// 	}
// }

// const mapDispatchToProps = {
//   increment: increment,
//   decrement: decrement
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

//or

// export default connect(state => ({count: state}), {increment, decrement})(App);

export default App
