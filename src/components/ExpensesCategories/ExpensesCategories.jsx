import { useState } from 'react';

export const ReportByCategories = () => {
  const [reportType, setReportType] = useState('Expenses');

  const toggleReportType = () => {
    console.log('change type');

    if (reportType === 'Expenses') {
      setReportType('Income');
    }
    if (reportType === 'Income') {
      setReportType('Expenses');
    }
  };

  return (
    <div>
      <div>
        <button onClick={toggleReportType}>Previos</button>
        <p>{reportType}</p>
        <button onClick={toggleReportType}>Next</button>
      </div>

      {reportType === 'Expenses' ? (
        <ul>Expenses Categories</ul>
      ) : (
        <ul>Income Categories</ul>
      )}
    </div>
  );
};
