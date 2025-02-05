import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import AddBlog from './components/AddBlog.jsx'
import BlogForm from './components/BlogForm.jsx'
import GenereSuggestions from './components/GenereSuggestions.jsx'

const App = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('All');

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        setBlogs(storedBlogs);
    }, []);

    const addBlog = (newBlog) => {
        const updatedBlogs = [...blogs, newBlog];
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };

    const filteredBlogs = selectedGenre === 'All'
        ? blogs
        : blogs.filter(blog => blog.genre === selectedGenre);

    return (
        <>
            <div>
                <Navbar />
            </div>
            <h1 className='text-center text-3xl my-5'>Everything you need to know..</h1>
            <BlogForm addBlog={addBlog} />
            <div>
                <GenereSuggestions selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100">
                {filteredBlogs.map((blog, index) => (
                    <AddBlog key={index} blogId={index} title={blog.title} content={blog.content} imageUrl={blog.imageUrl} />
                ))}
            </div>
        </>
    )
}

export default App