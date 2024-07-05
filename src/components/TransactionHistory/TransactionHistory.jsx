import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={s.tableWrapper}>
      <table className={s.transactionHistory}>
        <thead className={s.head}>
          <tr className={s.headRow}>
            <th className={s.headRowItem}>Type</th>
            <th className={s.headRowItem}>Amount</th>
            <th className={s.headRowItem}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={s.body}>
              <td className={s.itemValue}>{type}</td>
              <td className={s.itemValue}>{amount}</td>
              <td className={s.itemValue}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
