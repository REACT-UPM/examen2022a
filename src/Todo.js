export default function Todo(props) {
  
	return (<li key={props.index}>          
    <div>Titulo: <b>{props.item.todo}</b></div>
    <div>Completado: {'' + props.item.completed}</div>
    {props.item.userId===props.myUserId ? <button onClick={()=>props.toggle(props.index)}>TOGGLE</button>:<div>No se puede hacer TOGGLE</div>}
  </li>)
}