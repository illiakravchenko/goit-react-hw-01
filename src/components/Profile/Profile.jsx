import s from "./Profile.module.css";

const Profile = ({ username, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.userCard}>
        <img className={s.cardImage} src={image} alt="User image" />
        <p className={s.userName}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.statsList}>
        <li className={s.statsItem}>
          <p className={s.statsLabel}>Followers</p>
          <p className={s.statsValue}>{stats.followers}</p>
        </li>
        <li className={s.statsItem}>
          <p className={s.statsLabel}>Views</p>
          <p className={s.statsValue}>{stats.views}</p>
        </li>
        <li className={s.statsItem}>
          <p className={s.statsLabel}>Likes</p>
          <p className={s.statsValue}>{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
