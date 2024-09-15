import React from "react";
import './Huvid.css'

const huvid = [
    { title: 'TTRPG writing', id: 1 },
    { title: 'Exploration', id: 2 },
    { title: 'Who knows, really?', id: 3 },
  ];
function RenderHuvid () {
    const listItems = huvid.map(state =>
        <li key={state.id}>
          {state.title}
        </li>
      );
      
      return (
        <ul className="Huvid">{listItems}</ul>
      );
}


export default RenderHuvid;