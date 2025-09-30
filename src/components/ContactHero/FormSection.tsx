interface FormSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function FormSection({
  title,
  children,
  className = ''
}: FormSectionProps) {
  return (
    <div className={` border border-[#722973] rounded-lg p-2 ${className}`}>
      {title && <h3 className="text-gray-700 font-medium mb-2">{title}</h3>}
      {children}
    </div>
  );
}
