import Todo from "./Todo";

export default function TodoList(props) {
  //reduzco el array al tamaño que me indiquen en numitems
  const sliced_results = props.lista.slice(0, props.numitems);

	return (<div>
    <ul id="todos">
      {sliced_results.map((item, index) => (
        <Todo item={item} index={index} toggle={props.toggle} myUserId={props.myUserId}/>
      ))}
    </ul>

  </div>)
}