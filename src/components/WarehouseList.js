import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Link from '@material-ui/core/Link';
import WarehouseInfo from "./WarehouseInfo";
import { makeStyles } from '@material-ui/core/styles';
import { db } from './firebase';

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

function useGetData() {
  const [documents, setDocuments] = React.useState([]);
  const db = firebase.firestore();
  React.useEffect(() => {
    db.collection("values")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((doc) =>
          arr.push({ id: doc.id, value: doc.data() })
        );
        setDocuments(arr);
      });
  }, [db]);
  return [documents];
};

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
          length: warehouses[warehouse].lenght,
          width: warehouses[warehouse].width,
          height: warehouses[warehouse].height,
        });
      }
      setWarehouse(newState);
    });
  }, []);

  var coll = db.collection("warehouses").doc("details")
    coll.get().then((doc) => {
      if (doc.exists) {
        var data =  doc.data()
        console.log(data)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    }
  );

  function useCreateCards() {
    const data = useGetData();
    const cards = data.map(() => {
      <WarehouseInfo name={data.name} location={data.location} info="what" />
    });
    return cards;
  }

  return (
    <>
      <h1>Available Warehouses</h1>
      <Link href="/NewWarehouse" className={classes.AddNew}>Add New WareHouse</Link>
      <div className={classes.WarehouseList}>
        <WarehouseInfo name="yeet" location="hello" info="what" />
        <WarehouseInfo name="2" location="hello" info="what" />
        <WarehouseInfo name="3" location="hello" info="what" />
        <WarehouseInfo name="4" location="hello" info="what" />
        {useCreateCards()}
      </div>
    </>
  )
}
