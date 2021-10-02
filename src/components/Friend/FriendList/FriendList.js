import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({friends}) {
    return (
        <ul className={s.friendList}>
            {friends.map(friend =>
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnLine={friend.isOnline}
                />)}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnLine: PropTypes.bool
        })
    )
}