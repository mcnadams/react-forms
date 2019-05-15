import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class TextFormatter extends PureComponent {
  state = {
    input: '',
    formatted: '',
    color: ''
  }

  // formatInput = () => {
  //   const { input } = this.state;
  //   figlet.text(input, { font : 'Ghost' }, (err, result) => {
  //     console.log(err);
  //     this.setState({ formatted: result });
  //   });
  // }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <>
        <input name='input' value={this.state.input} onChange={this.handleChange} />
        <input name='color' type='color' value={this.state.color} onChange={this.handleChange} />
        <div style={{ color: this.state.color }}>{this.state.input}</div>
      </>
    );
  }
}
