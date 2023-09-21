import React from 'react'
import downArrow from '../assets/dropdown-icon.svg'
import Image from 'next/image'

const CurrencyDropdown = ({ currencyOptions, onSelectCurrency, baseCurrency }) => {
  return (
    <div className="dropdown font-bold text-uphold-darker">
      <label
        className="flex flex-center bg-white px-3 py-2 rounded-full"
        tabIndex={0}
      >
        <Image
          className='w-6 h-6'
          src={baseCurrency.icon}
          alt={baseCurrency.code}
        />
        <span className='ml-3 text-xs'>
          {baseCurrency.code}
        </span>
        <Image src={downArrow} className='ml-2' alt='Open dropdown icon'/>
      </label>

      <ul tabIndex={0} className="dropdown-content p-2 shadow-xl z-50 bg-white">
      
      {currencyOptions.map(({ code, icon }) => (

          // Excludes the base currency from the dropdown options
          code !== baseCurrency.code && (
            <li key={code} className='p-2'>
              <button
                data-testid="dropdown-option"
                onClick={() => onSelectCurrency(code)} //TC02
                className='flex flex-center'
              >
                <Image className='w-6 h-6' src={icon} alt={code} />
                <span className='ml-3'>
                  {code}
                </span>
              </button>
            </li>
          )
        ))}

      </ul>
    </div>
  )
}

export default CurrencyDropdown
