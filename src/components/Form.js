import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ todo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({todo: ''});
  }

  render(){
    return(
      <React.Fragment>
        <h3>Add items here:</h3>
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.todo} onChange={this.handleChange}/>
            <input type='submit' value='submit'/>
          </form>
      </React.Fragment>
    );
  }
}

export default Form;
