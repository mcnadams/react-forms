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

  handleInputChange = ({ target }) => {
    this.setState({ input: target.value }, () => {
      this.formatInput();
    });
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  render() {
    return (
      <>
        <input name='input' value={this.state.input} onChange={this.handleInputChange} />
        <input name='color' type='color' value={this.state.color} onChange={this.handleColorChange} />
        <div style={{ color: this.state.color }}>{this.state.formatted}</div>
      </>
    );
  }
}
