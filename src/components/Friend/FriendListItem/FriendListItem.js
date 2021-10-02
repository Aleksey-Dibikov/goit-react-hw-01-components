import s from './FriendListItem.module.css'
import PropTypes from 'prop-types';

export default function FriendListItem ({ avatar, name, isOnLine}) {
    return (
        <li className={s.item}>
            <span className={`${isOnLine ? s.statusOnline : s.statusOffline}`}></span>
            <img className="avatar" src={avatar} alt="avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

FriendListItem.protoTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnLine: PropTypes.bool
}