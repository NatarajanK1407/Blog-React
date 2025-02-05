import React from 'react'

const GenereSuggestions = ({ selectedGenre, setSelectedGenre }) => {
    const suggestions = [
        'All', 'Technology', 'Health', 'Science', 'Travel', 'Education',
        'Finance', 'Sports', 'Entertainment', 'Lifestyle', 'Food'
    ];

    return (
        <div className="flex justify-center gap-6 overflow-x-auto p-4">
            {suggestions.map((title, index) => (
                <div
                    key={index}
                    className={`hover:bg-gray-900 hover:text-amber-50  flex-shrink-0 bg-gray-300 shadow-md rounded-lg p-4 m-2 cursor-pointer ${selectedGenre === title ? 'bg-blue-200' : ''}`}
                    onClick={() => setSelectedGenre(title)}
                >
                    <h3 className="text-lg font-bold">{title}</h3>
                </div>
            ))}
        </div>
    )
}

export default GenereSuggestions