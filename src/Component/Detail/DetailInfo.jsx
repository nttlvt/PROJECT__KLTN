
import React from 'react'

export const DetailInfo = () => {
  return (
    <div className="text-white grid grid-rows justify-between ml-5">
      <div>
        <h1 className='text-4xl font-bold'>iPhone 15 Pro Max</h1>
        <div className="flex items-center justify-start gap-x-5">
          <span className="text-base text-slate-400">Thương hiệu: Apple</span>
          <span>|</span>
          <span className="text-base text-slate-400 short-edit">SKU: 63748990d46d8d973ea984f9</span>
        </div>
      </div>
      <div>

        <p className="my-3 text-red-100 font-bold text-3xl">27.999.000đ</p>

      </div>

      <div>
        <p className="btn btn-light my-2 w-1/4 h-auto font-bold "> RAM 8 GB - SSD 256 GB</p>
      </div>
      <div className=" bg-[#2f3033] items-center border-solid border-inherit	border-2 p-1 rounded-lg grid grid-rows">
        <div className=" p-3 border-bottom" >
          <p className="text-[20px] font-bold">Khuyến mãi</p>
          <p>Giá và khuyến mãi dự kiến áp dụng đến 23:59 | 01/05</p>
        </div>
        <div className=" p-3">
          <p>Nhập mã VNPAYTGDD2 giảm ngay 1% (tối đa 200.000đ) khi thanh toán qua VNPAY-QR, áp dụng cho đơn hàng từ 3 Triệu</p>
          <a href="/">Xem chi tiết tại đây</a>
        </div>
      </div>
      <div className='grid grid-rows my-3 gap-2'>
        <button className='p-6 text-center bg-[#0071e3] rounded-[12px] text-[20px] font-bold'>MUA NGAY</button>
        <div className='flex justify-between'>
          <button className='text-black bg-slate-100 w-1/2 p-3 rounded-[12px] text-[18px] font-bold mr-1'>Mua trả góp 0%</button>
          <button className='text-black bg-slate-100 w-1/2 p-3 rounded-[12px] text-[18px] font-bold ml-1'>Trả góp qua thẻ</button>
        </div>
      </div>
      <div>
        <ul >
          <li className='font-bold text-[18px]'>Chính sách bán hàng</li>
          <li>
            <i class="fa-solid fa-money-bill-transfer"></i>
            <p className="inline ml-6 text-[17px]">Hư gì đổi nấy 12 tháng tại ShopTT</p>
          </li>
          <li >
            <i class="fa-regular fa-circle-check"></i>
            <p  className="inline ml-7 text-[17px]">Bảo hành chính hãng 1 năm</p>
          </li>
          <li><i class="fa-solid fa-truck-arrow-right"></i>
            <p className="inline ml-6 text-[17px]">Giao hàng nhanh toàn quốc</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
