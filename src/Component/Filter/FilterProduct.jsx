import React from 'react'
import data from '../Sale/data.json'

export const FilterProduct = () => {
  return (
    <div className="border-1 border-[#323232] p-3 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center" >
          <h2 className="text-white mr-2">Sắp xếp</h2>
          <button className="btn btn-primary mx-2">Tăng dần</button>
          <button className="btn btn-primary">Giảm dần</button>
        </div>
        <input type="text" placeholder="Tìm kiếm" />

      </div>


      <div className="row filter__product__content">

        {

          data.map((val) => {
            return <div className='filter__card grid grid-rows-1 justify-center'>

              <img src={val.image} alt="..." />
              <div>
                <h1 className='text-white text-center text-2xl h-20 mt-2'>{val.name}</h1>
              </div>
              <div>
                <p className='text-orange-600 text-center font-bold '>{new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 2,
                }).format(val.price)}</p>

                {/* {val.description} */}
              </div>

            </div>

          })
        }
      </div>
    </div>

  )
}
