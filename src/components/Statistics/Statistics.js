import s from './Statistics.module.css'
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className="title">Upload stats</h2>}

        <ul className={s.statList}>
                {stats.map(stat =>
                    <li className={s.item} key={stat.id}>
                    <span className="label">{stat.label}</span>
                    <span className="percentage">{stat.percentage}</span>
                </li>
            )}
                
            {/* <li class="item">
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage}</span>
            </li>
            <li class="item">
                <span class="label">{label}</span>
                <span class="percentage">{percentage}</span>
            </li>
            <li class="item">
                <span class="label">{label}</span>
                <span class="percentage">{percentage}</span>
            </li>
            <li class="item">
                <span class="label">{label}</span>
                <span class="percentage">{percentage}</span>
            </li> */}
        </ul>
        </section>
    )
}

Statistics.propType = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
}