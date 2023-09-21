import Image from 'next/image'
import React from 'react'

const SingleCurrencyRow = ({ rate, icon, currency }) => {
  return (
    <div data-testid="currency-row"
         className='px-4 sm:px-24 mt-4 flex items-center justify-between w-full font-bold text-uphold-darker'
    >
      <p>{rate}</p>
      <div className='flex justify-start items-center space-x-3 w-16 mr-3'>
        <Image className='w-6 h-6' src={icon} alt={currency} />
        <span className='ml-3 text-xs'>{currency}</span>
      </div>
    </div>
  )
}

export default SingleCurrencyRow
