import React, { Component } from 'react';
import axios from 'axios';

import WarehousesTable from './WarehousesTable';

class WarehousesFilter extends Component {

  state = {
    initialList: [],
    filters:[],
    toggleColor: [],
    toggleAll: true
  }

  componentDidMount(){
    axios.get('http://localhost:3004/api/v1/warehouses')
      .then(response => {
        this.setState({
          initialList: response.data,
          filters: response.data
        })
      })
  }

  showAll = () => {
    this.setState({
      toggleAll: true,
      toggleColor: [],
      filters: this.state.initialList
    })
  }

  filterHandler = (param) => {
    let newToggleColor = this.state.toggleColor;
    let newList = this.state.initialList;
    if (!newToggleColor.includes(param) && param !== 'default') {
      newToggleColor.push(param);
    } else {
      let index = newToggleColor.indexOf(param);
      if (index !== -1) {
        newToggleColor.splice(index, 1);
      }
    }
    if (newToggleColor.length === 0) {
      this.showAll();
    } else {
      newToggleColor.map((item) => {
        switch (item) {
          case 'chilled':
            return (
              newList = newList.filter((list) => (list.temperature === item))
            );
          case 'frozen':
            return (
              newList = newList.filter((list) => (list.temperature === item))
            );
          case 40000:
            return (
              newList = newList.filter((list) => (list.capacity_sq_ft >= item))
            );
          case 2:
            return (
              newList = newList.filter((list) => (list.rating >= item))
            );
          case 4:
            return (
              newList = newList.filter((list) => (list.rating >= item))
            );
          default:
            this.showAll();
        }
        return newList;
      })
    }
    this.setState({
      filters: newList,
      toggleColor: newToggleColor,
      toggleAll: newToggleColor.length === 0
    })
  }

  render() {
    console.log(this.state.initialList);
    console.log(this.state.toggleColor);
    const toggleColor = this.state.toggleColor;
    return (
      <div>
        <h1>Warehouses Data Filter</h1>
        <div className="label-wrapper">
          <div className="label_items">
            <h3>Count</h3>
            <span><strong>{this.state.filters.length}</strong></span>
          </div>
          <div className="label_items">
            <h3 style={{ color: "#f5f5f5" }}>Display All</h3>
            <button
              className={this.state.toggleAll ? "active" : ''}
              onClick={() => this.showAll()}>Display All</button>
          </div>
          <div className="label_items">
            <h3>Temperature</h3>
            <button
              className={toggleColor.includes('chilled') ? 'active' : ''}
              onClick={() => this.filterHandler('chilled')}>
              Chilled
            </button>
             <button 
              className={toggleColor.includes('frozen') ? 'active' : ''}
              onClick={() => this.filterHandler('frozen')}>
              Frozen
            </button>
          </div>
        </div>

        <WarehousesTable array={this.state.filters}/>

      </div>
    );
  }
}

export default WarehousesFilter;