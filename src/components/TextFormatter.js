import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
  state = {
    input: '',
    formatted: '',
    color: ''
  }

  formatInput = () => {
    this.setState({ formatted: this.state.input + '!' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatInput();
    });
  }

  render() {
    return (
      <>
        <input name='input' value={this.state.input} onChange={this.handleChange} />
        <input name='color' type='color' value={this.state.color} onChange={this.handleChange} />
        <div style={{ color: this.state.color }}>{this.state.formatted}</div>
      </>
    );
  }
}
