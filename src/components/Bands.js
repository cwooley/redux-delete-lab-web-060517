import React, { Component } from 'react';
import Band from './Band'
class Bands extends Component {
  makeBands(){
    if (this.props.store.getState().bands){
      return this.props.store.getState().bands.map(band => <li><Band band={band} store={this.props.store}/></li>)
    }
  }
  render() {
    return(
      <ul>
        {this.makeBands()}
      </ul>
    );
  }
};

export default Bands;
