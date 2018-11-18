import React, { Component } from 'react';
import axios from 'axios';

import WarehousesTable from './WarehousesTable';

class WarehousesFilter extends Component {

  state = {
    initialList: []
  }

  componentDidMount(){
    axios.get('http://localhost:3004/api/v1/warehouses')
      .then(response => {
        this.setState({
          initialList: response.data
        })
      })
  }

  render() {
    console.log(this.state.initialList)
    return (
      <div>
        <WarehousesTable array={this.state.initialList}/>
      </div>
    );
  }
}

export default WarehousesFilter;