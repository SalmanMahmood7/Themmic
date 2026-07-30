import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import WhatWeDoIndex from './pages/WhatWeDoIndex.jsx';
import WhatWeDo from './pages/WhatWeDo.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/what-we-do" element={<WhatWeDoIndex />} />
        <Route path="/what-we-do/:slug" element={<WhatWeDo />} />
      </Route>
    </Routes>
  );
}

export default App;
