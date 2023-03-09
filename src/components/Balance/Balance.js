import { useState, useRef } from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { balance } from 'redux/Transactions/TransactionsOperations';

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
  const items = useSelector(state => state.transactions.items);
  const form = useRef();
  const dispatch = useDispatch();
  const [number, setNumber] = useState('');
  const formSubmit = e => {
    e.preventDefault();
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
    dispatch(balance({ newBalance: number }));
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
      <BalanceWrap to="/transaction/period-data">
        Reports
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
          <BalanceBtn type="button" className="btn" onClick={handleModalOpen}>
            Confirm
          </BalanceBtn>
          {!stateBalance && !items.length && <ModalWindow />}
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
