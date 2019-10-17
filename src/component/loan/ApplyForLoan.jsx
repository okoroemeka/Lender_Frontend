/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from '../reusables/Form';
import Button from '../reusables/Button';
import { loanApplicationAction } from '../../actions/loans';
import './loan.scss';

const ApplyForLoan = ({ toggleModal, loanApplicationAction: postLoan }) => {
  const [loanAmount, setLoan] = useState('');
  const [loanDuration, setDuration] = useState('');
  const handleSubmit = async () => {
    const userData = {
      tenor: loanDuration,
      amount: loanAmount,
    };
    const result = await postLoan(userData);
    if (result.status === 'Success') {
      toggleModal();
      return alert('Loan request successful');
    }
    alert(result.message);
  };
  return (
    <Form formClassName="loan__form" handleSubmit={handleSubmit}>
      <h3>Apply</h3>
      <label htmlFor="loanApplication">
        <input
          className="form__input__number"
          autoComplete="off"
          type="number"
          placeholder="Enter amount"
          name="email"
          value={loanAmount}
          onChange={(e) => setLoan(e.target.value)}
          required
          min="0"
        />
      </label>
      <label htmlFor="duration">
        <input
          className="form__input__number"
          type="number"
          placeholder="Enter loan duration in months"
          name="duration"
          value={loanDuration}
          onChange={(e) => setDuration(e.target.value)}
          required
          min="0"
          max="12"
        />
      </label>
      <Button
        buttonClassName="loan__form__button cancel__button"
        buttonText="Cancel"
        clickHandler={toggleModal}
      />
      <Button buttonClassName="loan__form__button" buttonText="Apply" />
    </Form>
  );
};
const mapStateToProps = ({ loanApplication: loanApplicationData }) => ({
  loanApplicationData,
});
export default connect(
  mapStateToProps,
  { loanApplicationAction },
)(ApplyForLoan);

// class ApplyForLoan extends Component {
//   state = {
//     tenor: '',
//     amount: '',
//   };

//   // const [loanAmount, setLoan] = useState('');
//   // const [loanDuration, setDuration] = useState('');
//   changeHandler = (event) => {
//     const {
//       target: { name, value },
//     } = event;
//     this.setState(() => ({ [name]: value }));
//   };

//   handleSubmit = async () => {
//     const { amount, tenor } = this.state;
//     const {
//       loanApplicationAction: postLoan,
//       loanApplicationData,
//       toggleModal,
//     } = this.props;
//     const userData = {
//       tenor: Number(tenor),
//       amount: Number(amount),
//     };
//     await postLoan(userData);
//     // console.log(loanApplicationData);
//     // toggleModal();
//   };

//   render() {
//     const { tenor, amount } = this.state;
//     const { toggleModal, loanApplicationData } = this.props;
//     console.log('loanApplicationData===>>', loanApplicationData);

//     return (
//       <Form formClassName="loan__form" handleSubmit={this.handleSubmit}>
//         <h3>Apply</h3>
//         <label htmlFor="loanApplication">
//           <input
//             className="form__input__number"
//             autoComplete="off"
//             type="number"
//             placeholder="Enter amount"
//             name="amount"
//             value={amount}
//             onChange={(e) => this.changeHandler(e)}
//             required
//             min="0"
//           />
//         </label>
//         <label htmlFor="duration">
//           <input
//             className="form__input__number"
//             type="number"
//             placeholder="Enter loan duration in months"
//             name="tenor"
//             value={tenor}
//             onChange={(e) => this.changeHandler(e)}
//             required
//             min="0"
//             max="12"
//           />
//         </label>
//         <Button
//           buttonClassName="loan__form__button cancel__button"
//           buttonText="Cancel"
//           clickHandler={toggleModal}
//         />
//         <Button buttonClassName="loan__form__button" buttonText="Apply" />
//       </Form>
//     );
//   }
// }
// const mapStateToProps = ({ loanApplication: loanApplicationData }) => ({
//   loanApplicationData,
// });
// export default connect(
//   mapStateToProps,
//   { loanApplicationAction },
// )(ApplyForLoan);