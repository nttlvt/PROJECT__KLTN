import React from 'react'
import { Header } from '../Component/Header/Header'
import { Carousel2 } from '../Component/Carousel/Carousel2'
import { ChooseProductMain } from '../Component/Choose Product/ChooseProductMain'
import { ContentSale } from '../Component/Sale/ContentSale'
import { Footer } from '../Component/footer/Footer'

export const Home = () => {
  return (
      <div>
          <Header />
          <Carousel2 />
          <ContentSale/>
          <ChooseProductMain />
          <Footer/>
          
    </div>
  )
}
