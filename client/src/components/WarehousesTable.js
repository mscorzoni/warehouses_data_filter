import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class WarehousesTable extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Latitude</TableCell>
              <TableCell>Longitude</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Temperature</TableCell>
              <TableCell>Capacity (square feet)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell> Test</TableCell>
              <TableCell> Test</TableCell>
              <TableCell> Test</TableCell>
              <TableCell> Test</TableCell>
              <TableCell> Test</TableCell>
              <TableCell> Test</TableCell>
              <TableCell> Test</TableCell>
              <TableCell> Test</TableCell>
            </TableRow>
          </TableBody>
        </Table>  
      </div>
    );
  }
}

export default WarehousesTable;