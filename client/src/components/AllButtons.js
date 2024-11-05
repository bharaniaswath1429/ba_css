import React from "react";
import { Button1, Button2, Button3 } from "./buttons";

const AllButtons = () => {
  const data = [
    { id: 1, description: "First item" , component: <Button1 />},
    { id: 2, description: "Second item", component: <Button2 />},
    { id: 3, description: "Third item", component: <Button3 />},
  ];

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div>
        <h2>All Buttons</h2>
        <table striped bordered hover>
          <thead>
            <tr>
              <th>Number</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.description}</td>
                <td>{item.component}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllButtons;
