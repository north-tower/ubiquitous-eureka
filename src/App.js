import CreateBlog from "./components/blog/CreateBlog";
// import Bloglist from "./components/blog/BlogList";
// import BlogView from "./components/blog/BlogView";
// import BlogEdit from "./components/blog/BlogEdit";

import Home from "./components/pages/Home";
import Navbar from "./components/temps/Navbar.js";

import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
        {/* <Route exact path='/' element={<Home/>} />
        <Route exact path='/blog/' element={<Bloglist/>} /> */}

        <Route path='/' element={<CreateBlog/>}  />
        {/* <Route path='/blog/:id' element={<BlogView/>}  />
        <Route path='/blog/edit/:id' element={<BlogEdit/>}  /> */}

    </Routes>
    </Router>
  );
}

export default App;
