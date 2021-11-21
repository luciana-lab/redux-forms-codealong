import React, { Component } from 'react';
// 2.1 import connect from react-redux
import { connect } from 'react-redux';

class CreateTodo extends Component {
  // 1. Create a Controlled Form using State and onChange event handler
  // 1.1 create initial component state
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  // 1.2 add an onChange handler to input that calls a function which will
  // 1.3 use setStae to update the component state whenever the user types somenthing in the input field
  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  // 2.2 update the render() function to call addTodo when the form is submitted
  handleSubmit = event => {
    event.preventDefault()
    // when handleSubmit() is called, it in turn calls the addTodo function, passing in the form data stored in this.state as an argument
    // addTodo function then creates the action and dispatches it to our reducert
    this.props.addTodo(this.state)
    // this.props.dispatch({ type: 'ADD_TODO', payload: this.state }) -> alternative approach
  }

  render() {
    return (
      <div>
        {/* Create Todo Component */}
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder="add todo" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

// 2. On submission of form, dispatxh an action to the store (when the user clicks submit, dispatch an action to the store)
const mapDispatchToProps = dispatch => {
  return {
    // dispatch argument is a plain JS object that includes:
    // a type key describring the type of action
    // payload, which is the data from the form
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
// export default connect()(CreateTodo) -> alternative approach (mapDispatchToProps function would not be necessary)
