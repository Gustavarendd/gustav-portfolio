'use state';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  textarea?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isValid?: boolean | null;
  onChange?: any | undefined;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  textarea,
  register,
  errors,
  isValid = true,
  onChange,
}) => {
  return (
    <div className="w-full relative">
      {textarea ? (
        <textarea
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder=" "
          className={`peer w-full p-4 h-[200px] pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
         ${errors[id] ? 'border-rose-500' : 'border-neutral-300'} ${
            errors[id] ? 'focus:border-rose-500' : 'focus:border-black'
          }
          dark:bg-slate-300
          dark:text-black`}
        />
      ) : (
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required, onChange })}
          placeholder=" "
          type={type}
          className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
         ${errors[id] || !isValid ? 'border-rose-500' : 'border-neutral-300'} ${
            errors[id] ? 'focus:border-rose-500' : 'focus:border-black'
          } dark:bg-slate-300 dark:text-black`}
        />
      )}

      <label
        className={`peer absolute text-md duration-150 transform left-4 -translate-y-3 top-5 z-10 origin-[0] 
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-4
        peer-hover:-translate-y-4
        hover:-translate-y-4
        dark:text-black
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
