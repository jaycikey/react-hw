import { Profile } from './Profile';
export const PilotsList = ({items}) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Profile pilot={item} />
        </li>
      ))}
    </ul>
  );
};
