export const IncomesReportElement = ({
  label,
  total,
  url,
  name,
  handleClick,
}) => {
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
