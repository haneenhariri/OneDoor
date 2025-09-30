// Form Data Types
export interface ContactFormData {
  fullName: string;
  email: string;
  contactReasons: string[];
  budget: number;
  message: string;
}

// Checkbox Option Type
export interface CheckboxOption {
  id: string;
  label: string;
  defaultChecked?: boolean;
}

// Form Input Types
export type InputType = 'text' | 'email' | 'tel' | 'password' | 'number';

// Form Validation Types
export interface FormErrors {
  fullName?: string;
  email?: string;
  contactReasons?: string;
  message?: string;
}

// Form State Types
export interface FormState {
  data: ContactFormData;
  errors: FormErrors;
  isSubmitting: boolean;
  isValid: boolean;
}
