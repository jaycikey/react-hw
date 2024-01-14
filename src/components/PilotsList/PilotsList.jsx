import { Profile } from '../Profile/Profile';
import './PilostsList.css';

export const PilotsList = ({items}) => {
  return (
    <ul className='list'>
      {items.map(item => (
        <li key={item.id}>
          <Profile pilot={item} />
        </li>
      ))}
    </ul>
  );
};
