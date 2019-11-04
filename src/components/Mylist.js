import React from 'react';

const Mylist = ({ listItems }) => {
  /* const { type, activity, participants, price } = listItems; */

  return (
    <div>
      <table>
        <tr>
          <th>#</th>
          <th>Activity</th>
          <th>Participants</th>
          <th>Budget</th>
          <th></th>
        </tr>
        {uniqueItems.map(item => (
          <tr>
            <td>{item.id}</td>
            <td>{item.activity}</td>
            <td>{item.participants}</td>
            <td>{item.price}</td>
            <td>checkmark</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Mylist;
