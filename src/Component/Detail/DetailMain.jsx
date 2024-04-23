import React from 'react'
import { Detail } from './Detail'
import { DetailInfo } from './DetailInfo'
import { Product } from '../Choose Product/Product'
import { ListProduct } from '../Choose Product/ListProduct'

export const DetailMain = () => {
    return (
        <div>
            < div className="w-3/4 m-auto flex justify-start  my-3 ">
                <Detail />
                <DetailInfo />
            </div>
            <div className='bg-white'>
                <h1 >Sản phẩm tương tự</h1>
                <ListProduct />
            </div>

        </div>

    )
}
