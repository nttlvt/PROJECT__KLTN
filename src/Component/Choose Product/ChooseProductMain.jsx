import React from 'react'
import { Choose } from './Choose'
import { Product } from './Product'
import { ListProduct } from './ListProduct'

export const ChooseProductMain = () => {
    return (
        
        <div className="choose__container">
            <div className=" choose__product flex">
                <Choose text='Iphone' image='./image/IP_Desktop.webp' />
                <Choose text='Mac' image='/image/Mac_Desktop.webp' />
                <Choose text='iPad' image="./image/IPad_Desktop.webp" />
                <Choose text='LapTop&PC' image='/image/Mac_Desktop.webp' />
            </div>
            <div className=''>
                <Product type='1' />
                <Product type='8' />
                <Product type='5' />
                <Product type='9' />
                <Product type='4'  />
            </div>
            <div>
                <ListProduct/>
            </div>

        </div>

    )
}
