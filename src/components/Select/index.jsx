import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { ReactComponent as Arrow } from '../../assets/icons/chevron-down.svg';

export function Select({ options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.includes(option);
    setSelectedOptions(
      isSelected
        ? selectedOptions.filter((selectedOption) => selectedOption !== option)
        : [...selectedOptions, option]
    );
  };

  const renderCheckbox = (option) => (
    <div className='flex justify-between items-center text-[15px] py-4 border-b-[0.5px] border-black relative'>
      {option}
      <span className='absolute -z-10 border-[0.3px] border-solid border-black rounded-sm w-4 h-4 right-2 top-1/2 -translate-y-1/2'></span>
      {selectedOptions.includes(option) && <CheckIcon className='w-4 h-4 mr-2' />}
    </div>
  );

  return (
    <div className='relative w-full'>
      <button
        type='button'
        className={
          'relative text-left text-21px bg-white rounded shadow-sm font-semibold border border-solid border-border py-3 px-5 w-350px '
        }
        onClick={handleToggle}>
        {placeholder}
        <span className='absolute inset-y-0 right-2 flex items-center pr-2 pointer-events-none'>
          <Arrow
            className={classNames('w-5 h-5', {
              'transform rotate-180': isOpen,
            })}
            aria-hidden='true'
          />
        </span>
      </button>
      {isOpen && (
        <div className='absolute z-10 w-full mt-1 bg-select rounded-md shadow-lg px-5 py-6'>
          {options.map((option) => (
            <button
              key={option}
              type='button'
              className='w-full text-left '
              onClick={() => handleOptionClick(option)}>
              {renderCheckbox(option)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
