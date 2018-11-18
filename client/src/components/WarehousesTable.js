import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const WarehousesTable = ({array}) => {
  const headerStyle = {
    fontSize: '0.9rem',
    fontWeight: 'bold',
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#E8E8E8' }}>
            <TableCell style={headerStyle}>id</TableCell>
            <TableCell style={headerStyle}>Name</TableCell>
            <TableCell style={headerStyle}>Location</TableCell>
            <TableCell style={headerStyle}>Latitude</TableCell>
            <TableCell style={headerStyle}>Longitude</TableCell>
            <TableCell style={headerStyle}>Rating</TableCell>
            <TableCell style={headerStyle}>Temperature</TableCell>
            <TableCell style={headerStyle}>Capacity (square feet)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((list, i) => (
            <TableRow key={i}>
              <TableCell>{list.internal_id}</TableCell>
              <TableCell> {list.name}</TableCell>
              <TableCell> {list.location}</TableCell>
              <TableCell> {list.latitude}</TableCell>
              <TableCell> {list.longitude}</TableCell>
              <TableCell> {list.rating}</TableCell>
              <TableCell> {list.temperature}</TableCell>
              <TableCell> {list.capacity_sq_ft}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};


export default WarehousesTable;