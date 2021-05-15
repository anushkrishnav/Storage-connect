import React from 'react';
import WarehouseInfo from "./WarehouseInfo";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  WarehouseList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default function WarehouseList() {
  const classes = useStyles();

  return (
    <>
      <h1>Available Warehouses</h1>
      <div className={classes.WarehouseList}>
        <WarehouseInfo />
        <WarehouseInfo />
        <WarehouseInfo />
        <WarehouseInfo />
      </div>
    </>
  )
}
