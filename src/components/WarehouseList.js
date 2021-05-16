import React from 'react';
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
});

export default function WarehouseList() {
  const classes = useStyles();

  return (
    <>
      <h1 style={{paddingLeft:"10%", paddingTop:"15px"}}>Available Warehouses</h1>
      <div style={{ display: "flex", paddingRight:"5%"}}>
        <Link href="/NewWarehouse" className="btn btn-info bg-blue-200 border" style={{marginLeft: "auto", padding:"15px"}}>Add New WareHouse</Link>
      </div>
      <div className={classes.WarehouseList}>
        <WarehouseInfo />
        <WarehouseInfo />
        <WarehouseInfo />
        <WarehouseInfo />
      </div>
    </>
  )
}
