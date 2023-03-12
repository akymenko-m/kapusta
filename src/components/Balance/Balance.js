import { useState, useRef, useEffect } from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { balance } from 'redux/Transactions/TransactionsOperations';
import back from 'images/array-to-back.svg';
import {
  BG,
  BalanceBackText,
  BalanceBtn,
  BalanceContainer,
  BalanceForm,
  BalanceInput,
  BalanceLink,
  BalanceTitle,
  BalanceWrap,
  Input,
  Wrap,
} from './Balance.styled';

import ModalWindow from '../BalanceModal/BalanceModal';
import { LightModalWindow } from 'components/LightModalWindow/LightModalWindow';
import { useLocation } from 'react-router-dom';
import { Slider } from 'components/Reports/ReportsNav/Slider/Slider';

export function Balance() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const location = useLocation();
  const isReportPage = location.pathname.includes('transaction');
  const goBackLink = location?.state?.from ?? '/';
  const [modalOpen, setModalOpen] = useState(false);
  const stateBalance = useSelector(state => state.transactions.newBalance);
  const items = useSelector(state => state.transactions.items);
  const form = useRef();
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [number, setNumber] = useState('');
  const formSubmit = e => {
    e.preventDefault();
    setButtonDisabled(true);
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
    dispatch(balance({ newBalance: Number(number.replace(/\s+/g, '')) }));
    form.current.reset();
    setButtonDisabled(true);
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
    <BG>
      {isReportPage && (
        <BalanceLink to={goBackLink}>
          <img width="24" height="24" src={back} alt="back"></img>
          {windowSize.width >= 768 && (
            <BalanceBackText>Main page</BalanceBackText>
          )}
        </BalanceLink>
      )}

      {isReportPage && <Slider />}
      <Wrap>
        {!isReportPage && (
          <BalanceWrap to="/transaction/period-data">
            Reports
            <FiBarChart2 />
          </BalanceWrap>
        )}
        <BalanceContainer>
          <BalanceTitle className="title">Balance:</BalanceTitle>
          {!isReportPage ? (
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
              <BalanceBtn
                type="button"
                className="btn"
                onClick={handleModalOpen}
                disabled={buttonDisabled} 
              >
                Confirm
              </BalanceBtn>
              {!stateBalance && !items.length && <ModalWindow />}
            </BalanceForm>
          ) : (
            <Input
              type="text"
              name="number"
              onChange={inputChange}
              placeholder={`${stateBalance}.00 UAH`}
              pattern="[0-9, .UAH]*"
              readOnly
            />
          )}

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
    </BG>
  );
}
