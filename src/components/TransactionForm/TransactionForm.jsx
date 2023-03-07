import { useRef } from 'react';
import { format } from 'date-fns';
import { useState } from 'react';

import Example from 'components/DatePicker/DatePicker';
// import { FaRegCalendarAlt } from 'react-icons/fa';
import { CgCalculator } from 'react-icons/cg';
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
    console.log(formData);
    onSubmit(formData);
    e.target.reset();
  };
  const getData = startDate => {
    format(new Date(startDate), 'yyyy-MM-dd');
    setDate(format(new Date(startDate), 'yyyy-MM-dd'));
  };

  return (
    <section>
      <Form onSubmit={createUserData}>
        <CalendarBox>
          <GoCalendar size="25px" color="#52555F" />
          <Example onChange={getData} />
        </CalendarBox>
        <InputBox>
          <label>
            <DescInput
              type="text"
              name="description"
              placeholder="Short description"
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
                <option value="Transport">Transport</option>
                <option value="Products">Products</option>
                <option value="Alcohol">Alcohol</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Housing">Housing</option>
                <option value="Technique">Technique</option>
                <option value="Communal, communication">
                  Communal, communication
                </option>
                <option value="Sports, hobbies">Sports, hobbies</option>
                <option value="Education">Education</option>
                <option value="Communal, communication">Other</option>
              </>
            ) : (
              <>
                <option value="DEFAULT" disabled defaultValue="">
                  Income category
                </option>
                <option value="Salary">Salary</option>
                <option value="Add.income">Add.income</option>
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
            <CgCalculator size="20px" color="#52555F" />
          </AmountLabelBox>
        </InputBox>
        <ButtonBox>
          <InputButton type="submit">Input</InputButton>
          <ClearButton type="reset">Clear</ClearButton>
        </ButtonBox>
      </Form>
    </section>
  );
};

// export default TransactionForm;
