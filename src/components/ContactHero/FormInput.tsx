import type { InputType } from './types';
import { useTranslation } from 'react-i18next'

interface FormInputProps {
  id: string;
  label: string;
  type?: InputType;
  placeholder?: string;
  required?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  id,
  label,
  type = 'text',
  placeholder,
  required = false,
  className = '',
  value,
  onChange
}: FormInputProps) {
  const { t } = useTranslation()

  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={id}
        className=" text-sm font-medium mb-0.5"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder || t('Type here')}
        required={required}
        value={value}
        onChange={onChange}
        className=" placeholder-gray-500 border border-[#722973] rounded-lg p-2 focus:outline-none   transition-colors"
      />
    </div>
  );
}
