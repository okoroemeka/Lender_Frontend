import React from 'react';

const Table = ({
  tableData = [
    {
      amount: 300,
      applicationDate: '27-12-2019',
      dueDate: '27-12-2020',
      status: 'Pending',
    },
  ],
}) => {
  const tableBody = tableData.map((loanData, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <tr key={index}>
      <td>
#
        {loanData.amount}
      </td>
      <td>
        {loanData.applicationDate}
        {' '}
      </td>
      <td>{loanData.dueDate}</td>
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
