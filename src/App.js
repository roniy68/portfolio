import { Route, Routes } from 'react-router-dom';
import { Footer } from './components';
import Header from './components/Header/Header';
import CalculatorPage from './containers/CalculatorPage/CalculatorPage';
import HomePage from './containers/Home/HomePage';
import QuotePage from './containers/QuotePage/QuotePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
