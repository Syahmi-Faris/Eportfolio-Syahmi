import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SemesterPage from './pages/SemesterPage';
import SubjectPage from './pages/SubjectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":semSlug" element={<SemesterPage />} />
          <Route path=":semSlug/:subSlug" element={<SubjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
