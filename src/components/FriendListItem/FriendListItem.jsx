import s from "../FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendWrapper}>
      <img src={avatar} alt="Avatar" width="48" className={s.friendAvatar} />
      <p className={s.friendName}>{name}</p>
      <p className={isOnline ? s.isOnline : s.isOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
