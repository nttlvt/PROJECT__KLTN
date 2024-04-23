import React from 'react'
import { LogoHeader } from './LogoHeader'
import { MainHeader } from './MainHeader'
import { SearchHeader } from './SearchHeader'
import { CartHeader } from './CartHeader'

export const Header = () => {
    return (
        <div className='bg-dark'>
            <div className="flex items-center container justify-between text-white max-w-6xl	">
                <LogoHeader />
                <MainHeader />
                <SearchHeader />
                <CartHeader/>
            </div>

        </div>
    )
}
