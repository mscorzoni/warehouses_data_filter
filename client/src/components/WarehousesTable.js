import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const WarehousesTable = ({array}) => {
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