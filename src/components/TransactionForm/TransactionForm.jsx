import { useRef, useState } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import Example from 'components/DatePicker/DatePicker';
import { GoCalendar } from 'react-icons/go';
import {
  InputButton,
  ClearButton,
  ButtonBox,
  Form,
  InputBox,
  DescInput,
  CategorySelect,
  AmountInput,
  AmountLabelBox,
  CalendarBox,
  CgCalculatorStyled,
} from './TransactionForm.styled';

export const TransactionForm = ({ onSubmit, isExpenseForm = false }) => {
  const [date, setDate] = useState(null);
  const descInputRef = useRef();
  const categoryInputRef = useRef();
  const amountInputRef = useRef();

  const createUserData = e => {
    e.preventDefault();

    const formData = {
      description: descInputRef.current.value,
      amount: Number(amountInputRef.current.value),
      date: date,
      category: categoryInputRef.current.value,
    };

    onSubmit(formData);
    e.target.reset();
  };
  const getData = startDate => {
    format(new Date(startDate), 'yyyy-MM-dd');
    setDate(format(new Date(startDate), 'yyyy-MM-dd'));
  };

  return (
    <>
      <Form onSubmit={createUserData}>
        <CalendarBox>
          <GoCalendar size="25px" color="#52555f" />
          <Example onChange={getData} style={{ background: 'transparent' }} />
        </CalendarBox>

        <InputBox>
          <label>
            <DescInput
              type="text"
              name="description"
              placeholder=" Short description"
              ref={descInputRef}
              required
              autoComplete="off"
            />
          </label>
          <CategorySelect
            defaultValue="DEFAULT"
            aria-label="select"
            name="category"
            required
            ref={categoryInputRef}
          >
            {isExpenseForm ? (
              <>
                <option value="DEFAULT" disabled defaultValue="">
                  Product category
                </option>
                <option value="Продукты">Products</option>
                <option value="Алкоголь">Alcohol</option>
                <option value="Развлечения">Entertainment</option>
                <option value="Здоровье">Health</option>
                <option value="Транспорт">Transport</option>
                <option value="Всё для дома">Housing</option>
                <option value="Техника">Technique</option>
                <option value="Коммуналка и связь">
                  Communal, communication
                </option>
                <option value="Спорт и хобби">Sports, hobbies</option>
                <option value="Образование">Education</option>
                <option value="Прочее">Other</option>
              </>
            ) : (
              <>
                <option value="DEFAULT" disabled defaultValue="">
                  Income category
                </option>
                <option value="З/П">Salary</option>
                <option value="Доп. доход">Add.income</option>
              </>
            )}
          </CategorySelect>
          <AmountLabelBox>
            <AmountInput
              type="number"
              name="amount"
              placeholder="0.00"
              ref={amountInputRef}
              required
              autoComplete="off"
            />
            <CgCalculatorStyled />
          </AmountLabelBox>
        </InputBox>
        <ButtonBox>
          <InputButton type="submit">Input</InputButton>
          <ClearButton type="reset">Clear</ClearButton>
        </ButtonBox>
      </Form>
    </>
  );
};

Example.TransactionForm = {
  onSubmit: PropTypes.func.isRequired,
  isExpenseForm: PropTypes.bool,
};
