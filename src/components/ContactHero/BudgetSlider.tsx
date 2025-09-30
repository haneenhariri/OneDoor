import { useState } from 'react';

interface BudgetSliderProps {
  min: number;
  max: number;
  defaultValue: number;
  step?: number;
  className?: string;
}

export default function BudgetSlider({ 
  min, 
  max, 
  defaultValue, 
  step = 100,
  className = '' 
}: BudgetSliderProps) {
  const [value, setValue] = useState(defaultValue);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className={className}>
      <p className="text-gray-500 mb-6">Slide to indicate your budget range</p>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 accent-green-500"
        />
        <div className="flex justify-between text-gray-700 mt-4">
          <span className="text-sm font-medium">{formatCurrency(min)}</span>
          <span className="text-lg font-semibold text-green-600">{formatCurrency(value)}</span>
          <span className="text-sm font-medium">{formatCurrency(max)}</span>
        </div>
      </div>
    </div>
  );
}
