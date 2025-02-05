import React from 'react'

const GenereSuggestions = () => {
    const suggestions = [
        'Technology',
        'Health',
        'Science',
        'Travel',
        'Education',
        'Finance',
        'Sports',
        'Entertainment',
        'Lifestyle',
        'Food'
    ];
    return (
        <div>
            <div className="flex flex-wrap gap-20 my-10 w-max mx-auto">
                {suggestions.map((suggestion, index) => (
                    <button key={index} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">{suggestion}</button>
                ))}
            </div>  
        </div>
    )
}

export default GenereSuggestions