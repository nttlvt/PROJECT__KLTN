import React from 'react'
import { FilterSiderBar } from './FilterSiderBar'
import { FilterProduct } from './FilterProduct'

export const FilerMain = () => {
  return (
      <div>
          <div className="filter__content">
              <div className="filter__siderbar">
                  <FilterSiderBar/>
              </div>
              <div className="filter__product">
                  <FilterProduct/>
              </div>
          </div>
    </div>
  )
}
