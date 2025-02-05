import React from 'react'

function Navbar() {
    return (
        <div className='flex justify-between items-center p-5 bg-gray-800 text-white px-60'>
            <h1 className='font-thin text-3xl'>Lets Blogg</h1>
            <div>
                <ul className='flex space-x-5'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Discover</a></li>
                    <li><a href="">Login</a></li>
                    <li className='font-bold'><a href="">Sign-up?</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar