
import FormInput from './FormInput';
import FormSection from './FormSection';
import CheckboxGroup from './CheckboxGroup';
import FormTextarea from './FormTextarea';
import { CONTACT_REASONS} from './constants';
import { useTranslation } from 'react-i18next'

export default function Form() {
  const { t } = useTranslation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-black text-black dark:text-white w-full p-4 sm:p-5 md:p-6 rounded-2xl h-full space-y-3 sm:space-y-4"
    >
      {/* Personal Information Row */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
        <FormInput
          id="fullName"
          label={t('Full Name')}
          type="text"
          required
          className="w-full sm:w-1/2"
        />
        <FormInput
          id="email"
          label={t('Email')}
          type="email"
          required
          className="w-full sm:w-1/2"
        />
      </div>

      {/* Contact Reasons Section */}
      <FormSection title={t('Why are you contacting us?')}>
        <CheckboxGroup
          options={CONTACT_REASONS}
          name="contactReasons"
        />
      </FormSection>


      {/* Message Section */}
      <FormSection>
        <FormTextarea
          id="message"
          label={t('Your Message')}
          rows={3}
          required
        />
      </FormSection>

      {/* Submit Button */}
        <div className='w-full text-white flex items-center justify-center gap-2.5 pt-2'>
            <button
              type="submit"
              className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-gradient-to-r rounded-full py-2.5 sm:py-3 px-6 sm:px-8 from-[#722973] to-[#a43ca6] text-sm sm:text-base font-medium hover:shadow-lg hover:shadow-[#a43ca6]/50 transition-all duration-300 hover:scale-105'
            >
              {t('Send')}
            </button>
        </div>
    </form>
  );
}
