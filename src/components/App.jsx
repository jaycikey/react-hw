import { Alert } from './Alert';
import { className } from './Clsx';
import { UserMenu } from './UserMenu';

export const App = () => {
  return (
    <div>
      <h2>Allerts</h2>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" outlined="true">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" elevated="true">
        Please update your profile contact information
      </Alert>
      <h2>Icons</h2>
      <UserMenu name="Connie"/>
    </div>
  );
};
console.log(className);
