import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import AddBlog from './components/AddBlog'
import BlogForm from './components/BlogForm'
import GenereSuggestions from './components/GenereSuggestions'

const App = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        setBlogs(storedBlogs);
    }, []);

    const addBlog = (newBlog) => {
        const updatedBlogs = [...blogs, newBlog];
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };

    return (
        <>
            <div>
                <Navbar />
            </div>
            <h1 className='text-center text-3xl my-5'>Everything you need to know..</h1>
            <BlogForm addBlog={addBlog} />
            <div>
                <GenereSuggestions />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {blogs.map((blog, index) => (
                    <AddBlog key={index} title={blog.title} content={blog.content} imageUrl={blog.imageUrl} />
                ))}
            </div>
        </>
    )
}

export default App