import { useTranslation } from 'react-i18next'

export default function CircularText() {
  const { t } = useTranslation()

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <svg
        viewBox="0 0 300 300"
        className="w-48 h-48 animate-spin-slow"
      >
        {/* الدائرة اللي بيمشي عليها النص */}
        <defs>
          <path
            id="circlePath"
            d="M 150, 150
               m -100, 0
               a 100,100 0 1,1 200,0
               a 100,100 0 1,1 -200,0"
          />
        </defs>

        {/* النص الدائري */}
        <text
          fill="#5a2d5c"
          fontSize="16"
          fontFamily="sans-serif"
          letterSpacing="4"
        >
          <textPath href="#circlePath">
            {t('scroll down for work together')}
          </textPath>
        </text>

        {/* الأيقونة بالوسط */}
        <circle
          cx="150"
          cy="150"
          r="20"
          stroke="#5a2d5c"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
}
