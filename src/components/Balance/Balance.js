import { useState, useRef } from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { balance } from 'redux/Transactions/TransactionsOperations';
import { NavLink } from 'react-router-dom';
import {
  BalanceBtn,
  BalanceContainer,
  BalanceForm,
  BalanceInput,
  BalanceTitle,
  BalanceWrap,
  Wrap,
} from './Balance.styled';

import ModalWindow from '../BalanceModal/BalanceModal';
import { LightModalWindow } from 'components/LightModalWindow/LightModalWindow';

export function Balance() {
  const [modalOpen, setModalOpen] = useState(false);
  const stateBalance = useSelector(state => state.transactions.newBalance);
  const form = useRef();
  const dispatch = useDispatch();
  let balance;
  const handleSubmit = evt => {
    evt.preventDefault();
    balance = evt.target.balance.value;
  };

  const [number, setNumber] = useState('');
  const formSubmit = e => {
    e.preventDefault();
    dispatch(balance({ newBalance: number }));
    balance = e.target.balance.value;
  };
  const inputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };


  // Handle update users balance
  const handleClick = () => {
    dispatch(balance({ newBalance: balance }));
    form.current.reset();
  };
  // Open modal window
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  // Close modal window
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Wrap>
      <BalanceWrap>
        <NavLink to="/transaction/period-data">Reports</NavLink>
        <FiBarChart2 />
      </BalanceWrap>
      <BalanceContainer>
        <BalanceTitle className="title">Balance:</BalanceTitle>
        <BalanceForm onSubmit={formSubmit} ref={form}>
          <label>
            <BalanceInput
             className="inputTag"
              type="text"
              name="number"
              title="Please, enter your balance"
          pattern="[0-9, .UAH]*"
              value={number}
              onChange={inputChange}
              placeholder={`${stateBalance}.00 UAH`}
              required
            />
          </label>
          <BalanceBtn type="submit" className="btn" onClick={handleModalOpen}>Confirm</BalanceBtn>
          {!stateBalance && <ModalWindow />}
          </BalanceForm>
          {modalOpen && (
        <LightModalWindow
          changeBalance="true"
          closeModal={handleModalClose}
          dispatch={handleClick}
          text="SURE"
          balance={balance}
        >
          Are you sure?
        </LightModalWindow>
      )}
      </BalanceContainer>
    </Wrap>
  );
}
