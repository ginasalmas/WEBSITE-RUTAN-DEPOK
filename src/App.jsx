import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import VisionMission from './pages/VisionMission';
import Announcements from './pages/Announcements';
import AnnouncementDetail from './pages/AnnouncementDetail';
import PublicInfo from './pages/PublicInfo';
import Gallery from './pages/Gallery';
import Complaints from './pages/Complaints';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/visi-misi" element={<VisionMission />} />
          <Route path="/pengumuman" element={<Announcements />} />
          <Route path="/pengumuman/:id" element={<AnnouncementDetail />} />
          <Route path="/informasi" element={<PublicInfo />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/pengaduan" element={<Complaints />} />
          <Route path="/berita" element={<News />} />
          <Route path="/berita/:id" element={<NewsDetail />} />
          <Route path="*" element={<div className="text-center py-20">Halaman tidak ditemukan</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
