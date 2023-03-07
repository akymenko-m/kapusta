import { useRef } from 'react';

import Example from 'components/DatePicker/DatePicker';
import { FaRegCalendarAlt } from 'react-icons/fa';

function TransactionForm({ onSubmit, isExpenseForm = false }) {
  const dataInputRef = useRef();
  const descInputRef = useRef();
  const categoryInputRef = useRef();
  const amountInputRef = useRef();

  const createUserData = e => {
    e.preventDefault();
    const formData = {
      description: descInputRef.current.value,
      amount: Number(amountInputRef.current.value),
      date: dataInputRef.current.value,
      category: categoryInputRef.current.value,
    };
    console.log(formData);
    onSubmit(formData);
    //  e.target.reset();
  };

  return (
    <section>
      <form onSubmit={createUserData}>
        <FaRegCalendarAlt />
        <Example />
        <label>
          <input type="date" name="date" ref={dataInputRef} required />
        </label>
        <label>
          <input
            type="text"
            name="description"
            placeholder="Short description"
            ref={descInputRef}
            required
          />
        </label>
        <select
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
        </select>
        <label>
          <input
            type="number"
            name="amount"
            placeholder="0.00"
            ref={amountInputRef}
            required
          />
        </label>
        <button type="submit">Input</button>
        <button type="reset">Clear</button>
      </form>
    </section>
  );
}

export default TransactionForm;
