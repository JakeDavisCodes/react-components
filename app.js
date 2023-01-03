// TODO
const {useState} = React;

const App = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <GrocceryList groceries = {['lettuce', 'carrots', 'asparagus']}/>
    </div>
  )
}

const GrocceryList = (props) => {
  return (
    <ul>
      {props.groceries.map(item => <GrocceryListItem name = {item}/>)}
    </ul>
  )
}

const GrocceryListItem = (props) => {

  const [purchased, setPurchased] = useState(false);

  const style = {
    textDecoration: purchased ? 'line-through' : 'none'
  }

  return (
    <li style = {style} onClick = {() => setPurchased(!purchased)} onMouseEnter = {onGroceryEnter} onMouseLeave = {onGroceryLeave}>{props.name}</li>
  )
}

const onGroceryClick = function (event) {
  setPurchased(!purchased);
}

const onGroceryEnter = function (event) {
  event.target.style.fontWeight = 'bold';
}

const onGroceryLeave = function (event) {
  event.target.style.fontWeight = '1';
}

console.log(1);
ReactDOM.render(<App />, document.getElementById("app"));