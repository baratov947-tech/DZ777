import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Posts from './component/Posts';
import SinglePost from './component/SinglePost';
import NotFound from './component/NotFound';
import './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Layout />}>

                     <Route index element={<Home />} />

                    <Route path="about" element={<About />} />
                    <Route path="posts" element={<Posts />} />

                    <Route path="posts/:id" element={<SinglePost />} />

                    <Route path="*" element={<NotFound />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}