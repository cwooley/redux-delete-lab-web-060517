import React, { Component } from 'react';

class Band extends Component {
  deleteBand = (event) => {
      event.preventDefault()
      let action = {
        type: 'DELETE_BAND',
        payload: this.props.band.id
      }
      this.props.store.dispatch(action)
  }
  render() {
    return(
      <li>
        {this.props.band.text}
        <button onClick={this.deleteBand} />
      </li>
    );
  }
};

export default Band;
