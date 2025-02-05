import React, { useState } from 'react'

const BlogForm = ({ addBlog }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [genre, setGenre] = useState('');

    const genres = [
        'Technology', 'Health', 'Science', 'Travel', 'Education',
        'Finance', 'Sports', 'Entertainment', 'Lifestyle', 'Food'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { title, content, imageUrl, genre };
        addBlog(newBlog);
        setTitle('');
        setContent('');
        setImageUrl('');
        setGenre('');
    }

    return (
        <div className="flex justify-center max-h-screen bg-gray-100 py-10">
            <form className="mt -10 w-full max-w-md bg-white shadow-md rounded-lg p-6" onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold mb-4">Create a New Blog</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                        Content
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
                        Genre
                    </label>
                    <select
                        id="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="">Select Genre</option>
                        {genres.map((g, index) => (
                            <option key={index} value={g}>{g}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Save Blog
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BlogForm