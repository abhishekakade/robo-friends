import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const Scroll = (props) => {
  return (
    // Add styles to make this div scrollable so the search box always remains at the top 
    // <div style={{ overflowY: "scroll", border: "5px solid lightgreen", height: "420px", padding: "20px" }}>
    //   {props.children}
    // </div>
    <div>
      <Scrollbars style={{ padding: "20px !important", height: 420, border: "5px solid lightgreen", borderRadius: "10px" }}>
        { props.children }
      </Scrollbars>
    </div>
  );
}

export default Scroll;
