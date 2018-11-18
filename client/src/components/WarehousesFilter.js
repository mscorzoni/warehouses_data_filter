import React, { Component } from 'react';
import axios from 'axios';

import WarehousesTable from './WarehousesTable';

class WarehousesFilter extends Component {

  state = {
    initialList: [],
    filters:[],
    filter_20: [],
    filter_50:[],
    toggleColor: [],
    toggleAll: true
  }

  componentDidMount(){
    axios.get('http://localhost:3004/api/v1/warehouses')
      .then(response => {
        this.setState({
          initialList: response.data.warehouses,
          filters: response.data.warehouses,
          filter_50: response.data.warehouses_50,
          filter_20: response.data.warehouses_20,
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

  showDistance = (distance) => {
    const arr1 = this.state.filters;
    const arr2 = this.state.filter_50;
    const arr3 = this.state.filter_20;
    let newlist = [];
    let newToggleColor = this.state.toggleColor;
    if (!newToggleColor.includes(distance)) {
      newToggleColor.push(distance);
      if (distance === '50km') {
        arr1.forEach((e1) => arr2.forEach((e2) => {
          if (e1.name === e2.name) {
            newlist.push(e1)
          }
        }
        ));
      }
      if (distance === '20km') {
        arr1.forEach((e1) => arr3.forEach((e2) => {
          if (e1.name === e2.name) {
            newlist.push(e1)
          }
        }));
      }
      this.setState({
        filters: newlist
      })
    } else {
      let index = newToggleColor.indexOf(distance);
      if (index !== -1) {
        newToggleColor.splice(index, 1);
        this.filterHandler('default');
      }
      else { newToggleColor = [] }
    }
    this.setState({
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

          <div className="label_items">
            <h3>Capacity</h3>
            <button
              className={toggleColor.includes(40000) ? 'active' : ''}
              onClick={() => this.filterHandler(40000)}>
              Equal or greater than 40,000
          </button>
          </div>

          <div className="label_items">
            <h3>Rating</h3>
            <button
              className={toggleColor.includes(2) ? 'active' : ''}
              onClick={() => this.filterHandler(2)}>
              Equal or greater than 2
          </button>
            <button
              className={toggleColor.includes(4) ? 'active' : ''}
              onClick={() => this.filterHandler(4)}>
              Equal or greater than 4
          </button>
          </div>

          <div className="label_items">
            <h3>Within Radius from lon 0.0 lat 0.0</h3>
            <button
              className={toggleColor.includes('50km') ? 'active' : ''}
              onClick={() => this.showDistance('50km')}>
              50km
          </button>
            <button
              className={toggleColor.includes('20km') ? 'active' : ''}
              onClick={() => this.showDistance('20km')}>
              20km
          </button>
          </div>

        </div>

        <WarehousesTable array={this.state.filters}/>

      </div>
    );
  }
}

export default WarehousesFilter;