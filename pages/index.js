import PageHeading from '../src/components/PageHeading.js';
import Balance from '../src/components/Balance.js';
import IncomeExpance from '../src/components/IncomeExpance';
import TransactionList from '../src/components/TransactionList';
import AddTransction from '../src/components/AddTransction';
import { GlobalProvider } from '../src/context/GlobalState';


const Home = () => {
  return (

    <div data-test='component-home' className="container">
      <GlobalProvider>
        <PageHeading />
        <Balance />
        <IncomeExpance />
        <TransactionList />
        <AddTransction />
      </GlobalProvider>
 
      <style jsx>{`
        .container {
          margin: 30px auto;
          width: 350px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>

  )
}
export default Home;
