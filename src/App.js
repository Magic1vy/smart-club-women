import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import TermsAndConditions from './entities/TermsAndConditions/ui/TermsAndConditions/TermsAndConditions';
import SponsorsPage from './pages/SponsorsPage/SponsorsPage';
import PrivacyPolicy from './entities/PrivacyPolicy/ui/PrivacyPolicy/PrivacyPolicy';
import ScrollToTop from './shared/helper/ScrollToTop';

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </Router>
    </>
  );
}

export default App;
