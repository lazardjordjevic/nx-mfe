// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Account } from '../../../../libs/shadred-data-access/src/lib/shadred-data-access';

export function App() {
  const [name, setName] = useState(Account.name);

  useEffect(() => {
    setName(() => {
      Account.name = 'Lazer blazing321';
      return Account.name;
    });
  }, []);

  return (
    <>
      <NxWelcome title={name} />
      <div />
    </>
  );
}

export default App;
