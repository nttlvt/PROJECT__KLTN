import React from 'react'
// import flash from '../../assets/Flash Sale.svg'
import { Sale } from './Sale'
export const ContentSale = () => {
    
    return (
        <div className="container mt-4 " >
            <div className='content__sale'>
                <div className='sale__content'>
                    <div className="flash__sale">
                      <img src="" alt="" />
                    </div>
                    <div>
                        <h2>KẾT THÚC TRONG</h2>

                    </div>
                    <div>
                        <h2>ĐANG DIỄN RA</h2>
                    </div>
                </div>

                <div>
                    <Sale />
                </div>
            </div>

        </div>
    )
}
