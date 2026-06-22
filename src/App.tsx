import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Semesters from './pages/Semesters';
import SemesterPage from './pages/SemesterPage';
import SubjectPage from './pages/SubjectPage';
import ProjectPage from './pages/ProjectPage';
import Activities from './pages/Activities';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="semesters" element={<Semesters />} />
          <Route path="semesters/:semSlug" element={<SemesterPage />} />
          <Route path="semesters/:semSlug/:subSlug" element={<SubjectPage />} />
          <Route
            path="semesters/:semSlug/:subSlug/:projSlug"
            element={<ProjectPage />}
          />
          <Route path="activities" element={<Activities />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
