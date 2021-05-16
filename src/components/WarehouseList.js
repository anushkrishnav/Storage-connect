import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Link from '@material-ui/core/Link';
import WarehouseInfo from "./WarehouseInfo";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  WarehouseList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  AddNew: {
    margin: '0 auto',
  }
});

export default function WarehouseList() {
  const classes = useStyles();
  const [warehouse, setWarehouse] = useState([]);

  useEffect (() => {
    const warehouseRef = firebase.database().ref('warehouse');
    warehouseRef.on('value', (snapshot) => {
      let warehouses = snapshot.val();
      let newState = [];
      for (let warehouse in warehouses) {
        newState.push({
          id: warehouse,
          name: warehouses[warehouse].name,
          location: warehouses[warehouse].location,
          rent: warehouses[warehouse].rent,
          length: warehouses[warehouse].length,
          width: warehouses[warehouse].width,
          height: warehouses[warehouse].height,
        });
      }
      setWarehouse(newState);
    });
  });

  return (
    <>
      <h1>Available Warehouses</h1>
      <Link href="/NewWarehouse" className={classes.AddNew}>Add New WareHouse</Link>
      <div className={classes.WarehouseList}>
        <WarehouseInfo />
        <WarehouseInfo />
        <WarehouseInfo />
        <WarehouseInfo />
      </div>
    </>
  )
}
