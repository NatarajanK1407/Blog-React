import React, { useState } from 'react'
import Modal from './Modal'

const AddBlog = ({ title, content, imageUrl, blogId }) => {
    const [showModal, setShowModal] = useState(false);

    const handleCardClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className="mt-10 w-full max-w-md bg-white shadow-md rounded-lg p-6 cursor-pointer" onClick={handleCardClick}>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                {imageUrl && <img src={imageUrl} alt={title} className="mb-4 rounded" />}
                <p className="text-gray-700 mb-4">
                    {`${content.substring(0, 100)}...`}
                </p>
                <div className="flex justify-between items-center">
                    <button className="text-blue-500 hover:underline">Comments</button>
                    <button className="text-red-500 hover:underline">Like</button>
                </div>
            </div>
            {showModal && (
                <Modal onClose={handleCloseModal} blogId={blogId}>
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    {imageUrl && <img src={imageUrl} alt={title} className="mb-4 rounded" />}
                    <p className="text-gray-700 mb-4">{content}</p>
                </Modal>
            )}
        </>
    )
}

export default AddBlog