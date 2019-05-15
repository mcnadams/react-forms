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
    this.props.addColor({ name: this.state.name, hex: this.state.color });
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <input type="color" name="color" value={this.state.color} onChange={this.handleChange} />
        <button>Add Color</button>
      </form>
    );
  }
}
