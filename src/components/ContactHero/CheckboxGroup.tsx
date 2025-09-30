import type { CheckboxOption } from './types';
import { useTranslation } from 'react-i18next'

interface CheckboxGroupProps {
  options: CheckboxOption[];
  name: string;
  className?: string;
}

export default function CheckboxGroup({
  options,
  name,
  className = ''
}: CheckboxGroupProps) {
  const { t } = useTranslation()

  return (
    <div className={`grid text-sm grid-cols-4 gap-0.5 ${className}`}>
      {options.map((option) => (
        <label
          key={option.id}
          className="flex items-center space-x-1 cursor-pointer hover:bg-gray-50 p-0.5 rounded transition-colors"
        >
          <input
            type="checkbox"
            id={option.id}
            name={name}
            value={option.id}
            defaultChecked={option.defaultChecked}
            className="w-5 h-5  bg-white border-gray-300 rounded  focus:ring-2"
          />
          <span className="text-gray-700 select-none">{t(option.label)}</span>
        </label>
      ))}
    </div>
  );
}
