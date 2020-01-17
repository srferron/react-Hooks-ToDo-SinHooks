import React, {Component} from 'react';

class TodoC extends Component {
  state = {
    newTodo: '',
    todos: [],
  }
  inputChangeHandler = event => {
    this.setState({ newTodo:event.target.value,
                    todos: this.state.todos })                  
  }
  addTodoHandler =  () => {
    //En React para sobrescribir un valor del estado o añadir uno nuevo hay que introducir siempre todos los valores que había previamente. Aqui se alimentan uno a uno pero se podría realimentar todos a la vez con el operador ternario ...
    //Algo asi:
    //this.setState(...this.state,this.state.newTodo)
    this.setState({ newTodo:'',
                    todos: this.state.todos.concat(this.state.newTodo)})
  }       
  render() { 
    return (
        <>
         <input placeholder="new todo"
                onChange={this.inputChangeHandler}
                value={this.state.newTodo}  />
         <button onClick={this.addTodoHandler}>Add</button>
         <hr/>
         <ul>
           {this.state.todos.map( todo => (<li>{todo}</li> ))}
        </ul>
        </>
      )
     }
}
export default TodoC