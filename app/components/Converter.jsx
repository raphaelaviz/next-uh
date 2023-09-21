'use client'

import React, { useState } from 'react'
import { useFilteredCurrencyPairs } from '../hooks/useFilteredCurrencyPairs'
import SingleCurrencyRow from './SingleCurrencyRow'
import { currencyMap } from '../lib/currenciesMap'
import CurrencyInput from './CurrencyInput'
import CurrencyDropdown from './CurrencyDropdown'

const Converter = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD') //TC01 
  const [typedValue, setTypedValue] = useState(0)
  const desiredPairs = useFilteredCurrencyPairs(baseCurrency)

  const handleInputChange = (newValue) => {
    setTypedValue(newValue)
  };

  const handleCurrencyChange = (selectedCurrency) => {
    setBaseCurrency(selectedCurrency)
  }

  return (
    <main className='flex justify-center min-h-screen'>
      <div className='converter_container'>

            <h1 className='converter_title'>
              Currency Converter
            </h1>
            <h2 className='sm:mx-[70px] mt-3 text-uphold-lighter'>
              Receive competitive and transparent pricing with no hidden spreads. See
              how we compare.
              <pre>{JSON.stringify(desiredPairs, null, 2)}</pre>
            </h2>
    

        <div className='flex mt-10 items-center justify-between px-2 py-1 bg-uphold-lightGray sm:w-[350px]'>

          <CurrencyInput onInputChange={handleInputChange} />
          <CurrencyDropdown
            baseCurrency={currencyMap.find((currency) => currency.code === baseCurrency)}
            currencyOptions={currencyMap}
            onSelectCurrency={handleCurrencyChange} //TC02
          />
        </div>

        {typedValue > 0 ? (
          desiredPairs &&
          currencyMap.map(({ code, icon }) => {

            // Excludes the base currency from desired convertions

            if (code !== baseCurrency) {
              const pair = `${baseCurrency}${code}`
              const pairData = desiredPairs.find((pairData) => pairData.pair === pair)

              // Wait for the ask value to be available before calculating the rate and rendering
              if (pairData) {
                const rate = (Number(pairData.ask) * typedValue).toFixed(6)

                return (
                  <SingleCurrencyRow
                    key={code}
                    currency={code}
                    icon={icon}
                    rate={rate}
                  />
                );
              } else {
                return (
                  <span className="loading loading-spinner text-success mt-3" key={code} />
                );
              }
            }
            return null;
          })
        ) : (
          <p className='text-uphold-lighter mt-5 text-[10px]'>
            Enter an amount to check the rates.
          </p>
        )}
      </div>
    </main>
  );
};

export default Converter
