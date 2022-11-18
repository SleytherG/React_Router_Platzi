import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/Menu";
import { BlogPage } from "./components/BlogPage";
import { HomePage } from "./components/HomePage";
import { ProfilePage } from "./components/ProfilePage";
import { BlogPost } from "./components/BlogPost";

// /#/ => con HashRouter -- /#/blog
// / => con BrowserRouter -- /blog

function App() {
 return (
  <>
   <HashRouter>
    <Menu />
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/blog" element={<BlogPage />} />
     <Route path="/blog/:slug" element={<BlogPost />} />
     <Route path="/profile" element={<ProfilePage />} />
     <Route path="*" element={<p>Not Found</p>} />
    </Routes>
   </HashRouter>
  </>
 );
}

export default App;
