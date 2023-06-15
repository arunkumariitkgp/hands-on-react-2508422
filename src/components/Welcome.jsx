const Welcome = (props) => {
  return <h1>Meet the <i>{props.name}</i></h1>
}

export default Welcome

//the code from line no 1 to 5 is equivalent to below code(short form)

// export default (props) => {
//   return <h1>Meet the <i>{ props.name }</i></h1>
// }
