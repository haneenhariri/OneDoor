import { useTranslation } from 'react-i18next'

interface FormTextareaProps {
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  className?: string;
}

export default function FormTextarea({
  id,
  label,
  placeholder,
  rows = 4,
  required = false,
  className = ''
}: FormTextareaProps) {
  const { t } = useTranslation()

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="text-gray-700 font-medium mb-4 block"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder || t('Type here')}
        rows={rows}
        required={required}
        className="w-full bg-white text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg p-2 focus:outline-none resize-none transition-colors"
      />
    </div>
  );
}
