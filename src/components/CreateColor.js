import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  }

  state = {
    name: '',
    color: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addColor({ name: this.state.name, color: this.state.color });
  }

  handleNameChange = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
        <input type="color" name="color" value={this.state.color} onChange={this.handleColorChange} />
        <br></br>
        <button>Add Color</button>
      </form>
    );
  }
}
