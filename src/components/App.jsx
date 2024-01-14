import pilots from '../pilots.json';
import { PageTitle } from './PageTitle';
import { PilotsList } from './PilotsList/PilotsList';

export const App = () => {
  return (
    <div>
      <PageTitle text = "Best pilots!" />
      <PilotsList items = {pilots} />
    </div>
  );
};
