import type { CheckboxOption } from './types';

// Contact reasons options
export const CONTACT_REASONS: CheckboxOption[] = [
  { id: 'web-design', label: 'Web Design', defaultChecked: true },
  { id: 'collaboration', label: 'Collaboration' },
  { id: 'mobile-app', label: 'Mobile App ' },
  { id: 'others', label: 'Others' }
];


// Form validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
} as const;
