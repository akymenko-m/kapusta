import { FiBarChart2 } from 'react-icons/fi';
import {
  BalanceBtn,
  BalanceContainer,
  BalanceForm,
  BalanceInput,
  BalanceTitle,
  BalanceWrap,
  Wrap,
} from './Balance.styled';

export function Balance() {
  return (
    <Wrap>
      <BalanceWrap>
        <p>Reports</p>
        <FiBarChart2 />
      </BalanceWrap>
      <BalanceContainer>
        <BalanceTitle>Balance:</BalanceTitle>
        <BalanceForm>
          <label>
            <BalanceInput />
          </label>
          <BalanceBtn>Confirm</BalanceBtn>
        </BalanceForm>
      </BalanceContainer>
    </Wrap>
  );
}
