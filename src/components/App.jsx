import pilots from '../pilots.json';
import { PageTitle } from './PageTitle/PageTitle';
import { PilotList } from './PilotList/PilotList';

export const App = () => {
  return (
    <div>
      <PageTitle text = "Best pilots!" />
      <PilotList items = {pilots} />
    </div>
  );
};
