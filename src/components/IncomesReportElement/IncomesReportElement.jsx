export const IncomesReportElement = ({ label, total, url }) => {
  const numberWithSpaces = num => {
    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <li>
      <p>{numberWithSpaces(total)}</p>
      <img src={url} alt={label} />
      <p>{label}</p>
    </li>
  );
};
