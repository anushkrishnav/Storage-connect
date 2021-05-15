import React, { useState } from "react";

export default function NewWarehouse() {

    const [location, setLocation] = useState(null)
    const [space, setSpace] = useState(null)

  return (
    <form>
      <label for="title">Location: </label>
      <input type="text" name="location" value={location} onChange={e => setLocation(e.target.value)} />
      <br />
      <label for="space">Amount of available space: </label>
      <input type="text" name="space" value={space} onChange={e => setSpace(e.target.value)}/>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
