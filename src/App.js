import './App.css';
import Profile from "./components/Profile/Profile";
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friend/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export default function App() {
  return (
    <div className="App">
      <section>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      </section>
      <section>
        <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}
      </section>
      <section>
        <FriendList friends={friends} />
      </section>
      <section>
        <TransactionHistory items={transactions} />
      </section>
    </div>
  );
}

// export default App;
