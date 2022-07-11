import { render } from "solid-js/web";
import { createSignal, For } from 'solid-js';

const Item = (item: any) => (<li>{item.name}</li>)

export function List(){
    const [todos, setTodos] = createSignal([]);
    
    return (
        <ul>
        <For each={todos()}>{(todo, i) =>
          <li>
            {todo}
          </li>
        }</For>
      </ul>
    )
}

render(() => <List />, document.getElementById("app")!);