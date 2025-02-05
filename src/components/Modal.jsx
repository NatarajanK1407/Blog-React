import React, { useState } from 'react'

const Modal = ({ children, onClose, blogId }) => {
    const [comments, setComments] = useState(JSON.parse(localStorage.getItem(`comments-${blogId}`)) || []);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        if (newComment.trim() === '') return;
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        localStorage.setItem(`comments-${blogId}`, JSON.stringify(updatedComments));
        setNewComment('');
    }

    const handleDeleteComment = (index) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
        localStorage.setItem(`comments-${blogId}`, JSON.stringify(updatedComments));
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full overflow-y-auto max-h-full">
                <button className="text-right text-gray-500 hover:text-gray-700" onClick={onClose}>
                    &times;
                </button>
                {children}
                <div className="mt-4">
                    <h3 className="text-lg font-bold mb-2">Comments</h3>
                    <ul className="mb-4">
                        {comments.map((comment, index) => (
                            <li key={index} className="flex justify-between items-center mb-2">
                                <span>{comment}</span>
                                <button
                                    className="text-red-500 hover:underline"
                                    onClick={() => handleDeleteComment(index)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Add a comment"
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                            onClick={handleAddComment}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal