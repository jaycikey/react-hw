import './Profile.css';

export const Profile = ({pilot : {name, email, avatar, age, active}}) => {
  const statusClasses = ['status'];
  if(active){
    statusClasses.push('is-active');
  }else{
    statusClasses.push('is-retired');
  }
    return <div className='profile'>
      <img src={avatar} alt={name} 
      width="180"
      height="180"
      />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p className={statusClasses.join(" ")}>Status: {active ? 'Active': 'Retired'}</p>
    </div>
  }