export const IncomesReportElement = ({ label, total, url }) => {
  return (
    <li>
      <p>{total}</p>
      <img src={url} alt={label} />
      <p>{label}</p>
    </li>
  );
};
