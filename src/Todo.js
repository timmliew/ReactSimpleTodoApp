import React from "react";

let id = 0;

const style = {
  textAlign: "left"
};

const TodoItem = props => {
  return (
    <li key={props.key} style={style}>
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={props.toggleTodo}
      />
      <span>{props.todo.text}</span>
      <button onClick={props.deleteTodo}>Delete</button>
    </li>
  );
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: id++, text: this.state.todo, checked: false }
      ]
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <div>
        <div>Todos Count: {this.state.todos.length}</div>
        <div>
          Unchecked Todos Count:
          {this.state.todos.filter(todo => todo.checked === false).length}
        </div>
        <div>
          <input
            placeholder="Your todo..."
            onChange={e =>
              this.setState({
                todo: e.target.value
              })
            }
          />
          <button onClick={this.addTodo}>Add Todo</button>
          <div>
            <ul>
              {this.state.todos.map((todo, key) => (
                <TodoItem
                  key={todo}
                  todo={todo}
                  toggleTodo={() => this.toggleTodo(todo.id)}
                  deleteTodo={() => this.deleteTodo(todo.id)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
