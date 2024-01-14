import css from './Profile.module.css';
// import clsx from 'clsx';

export const Profile = ({ pilot: { name, email, avatar, age, active } }) => {
  // const statusClasses = clsx('status', {
  //   [css.isActive]: active,
  //   [css.isRetired]: !active,
  // });
  const statusClasses = active ? css.isActive : css.isRetired;
  return (
    <div className="profile">
      <img src={avatar} alt={name} width="180" height="180" />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p className={statusClasses}>Status: {active ? 'Active' : 'Retired'}</p>
    </div>
  );
};
