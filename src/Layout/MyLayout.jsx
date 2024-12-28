import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function MyLayout() {
    const card = useSelector(state => state.card)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (card.length > 0) {
          
            const totalCount = card.reduce((acc, value) => acc + Number(value.count), 0);
            setCount(totalCount);
        } else {
            setCount(0);
        }
    }, [card])  

    return (
        <header className='bg-blue-300 shadow-md'>
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className='logo'>
                    <a href="#" className='text-3xl font-bold text-white hover:text-blue-700 transition-colors'>
                        C
                    </a>
                </div>

                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => 
                                    isActive ? 'text-blue-900 font-semibold text-lg' : 'text-white text-lg hover:text-blue-700 transition-colors'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => 
                                    isActive ? 'text-blue-900 font-semibold text-lg' : 'text-white text-lg hover:text-blue-700 transition-colors'
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/products" 
                                className={({ isActive }) => 
                                    isActive ? 'text-blue-900 font-semibold text-lg' : 'text-white text-lg hover:text-blue-700 transition-colors'
                                }
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/card" 
                                className={({ isActive }) => 
                                    isActive ? 'text-blue-900 font-semibold text-lg' : 'text-white text-lg hover:text-blue-700 transition-colors'
                                }
                            >
                                Card
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='text-2xl text-white'>
                    {count} 
                </div>
            </div>
        </header>
    )
}

export default MyLayout
