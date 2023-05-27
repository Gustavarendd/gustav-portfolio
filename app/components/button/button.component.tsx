'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  isValid?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  isValid = true,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || !isValid}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 hover:font-bold transition w-full 
        ${outline ? 'dark:bg-blue-200 bg:white' : 'bg-black'} 
        ${outline ? 'border-black' : 'border-black'} 
        ${outline ? 'text-black' : 'text-white'} 
        ${
          outline
            ? 'dark:hover:bg-blue-300 hover:bg-gray-300'
            : 'hover:opacity-80'
        } 
        ${small ? 'py-1' : 'py-3'} 
        ${small ? 'text-sm' : 'text-md'} 
        ${small ? 'font-light' : 'font-semibold'} 
        ${small ? 'border-[1px]' : 'border-2'}`}
    >
      {Icon && (
        <Icon
          size={24}
          className={`absolute left-4 top-3 ease-out duration-500 ${
            disabled ? 'left-[90%]' : 'left-4'
          } transition-all`}
        />
      )}
      {label}
    </button>
  );
};

export default Button;
