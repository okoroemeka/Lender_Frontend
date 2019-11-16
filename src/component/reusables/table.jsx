/* eslint-disable arrow-parens */
/* eslint-disable no-underscore-dangle */
import React from 'react';

const Table = ({
  loanHistoryData = [
    {
      amount: 300,
      createdOn: '27-12-2019',
      dueDate: '27-12-2020',
      status: 'Pending',
    },
  ],
  handleClick = () => null,
}) => {
  const tableBody = loanHistoryData.map(loanData => (
    // eslint-disable-next-line react/no-array-index-key
    <tr
      key={loanData._id}
      onClick={() => handleClick(loanData._id, loanHistoryData)}
    >
      <td>
        &#x20A6;
        {loanData.amount}
      </td>
      <td>
        {loanData.createdOn.split('T')[0]}
        {' '}
      </td>
      <td>{loanData.dueDate.split('T')[0]}</td>
      <td>{loanData.status}</td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>amount</th>
          <th>application date</th>
          <th>due date</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
};

export default Table;
