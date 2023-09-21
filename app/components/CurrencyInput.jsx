import React from 'react'
import _ from 'lodash'

const CurrencyInput = ({ onInputChange, typedValue }) => {

  const debouncedInputChange = _.debounce((value) => { //TC03
    onInputChange(value)
  }, 400)

  const handleInputChange = (e) => {
    const { value } = e.target
    debouncedInputChange(value)
  };

  return (
    <input
      className='bg-uphold-lightGray text-uphold-darker w-2/3 px-3 py-2 text-3xl outline-none no-arrows'
      type='number'
      placeholder='0.00'
      value={typedValue}
      onChange={handleInputChange}
    />
  );
};

export default CurrencyInput
