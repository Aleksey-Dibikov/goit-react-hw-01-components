import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
    return (
        <table className={s.transactionHistory}>            
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {items.map(item => 
                <tbody key={item.id}>
                    <tr>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                </tbody>
            )}
        </table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
        }),
    )
};