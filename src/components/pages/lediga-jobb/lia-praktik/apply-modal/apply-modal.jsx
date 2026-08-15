'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/shared/button';
import CloseIcon from 'icons/close.inline.svg';
import { cn } from 'utils/cn';
import { emailRegexp } from 'utils/forms';

const APPLY_ENDPOINT = '/api/lia-application';
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ACCEPTED_EXTENSIONS = ['.pdf', '.doc', '.docx'];

const fieldClassName =
  'w-full rounded-lg border border-gray-new-90 bg-white px-3.5 py-2.5 text-sm leading-normal tracking-extra-tight text-black-new outline-none transition-colors placeholder:text-gray-new-60 focus:border-gray-new-40';
const labelClassName =
  'mb-1.5 block text-sm font-medium leading-none tracking-extra-tight text-black-new';
const errorClassName = 'mt-1.5 text-xs leading-tight tracking-extra-tight text-[#E5484D]';

const hasAcceptedExtension = (name = '') =>
  ACCEPTED_EXTENSIONS.some((ext) => name.toLowerCase().endsWith(ext));

const ApplyModal = ({ label, theme = 'primary', size = 'new', className = null }) => {
  const t = useTranslations('liaPraktik.apply');
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle');
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const cvFile = watch('cv')?.[0];

  const close = () => {
    setIsOpen(false);
    setStatus('idle');
    reset();
  };

  const onSubmit = async (values) => {
    setStatus('submitting');
    try {
      const body = new FormData();
      body.append('name', values.name);
      body.append('email', values.email);
      body.append('phone', values.phone ?? '');
      body.append('education', values.education ?? '');
      body.append('period', values.period ?? '');
      body.append('message', values.message ?? '');
      body.append('company', values.company ?? ''); // honeypot
      if (values.cv?.[0]) body.append('cv', values.cv[0]);

      const response = await fetch(APPLY_ENDPOINT, { method: 'POST', body });
      if (!response.ok) throw new Error('Request failed');

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Button
        className={className}
        theme={theme}
        size={size}
        type="button"
        handleClick={() => setIsOpen(true)}
      >
        {label}
      </Button>

      <Dialog open={isOpen} onClose={close} className="relative z-[100]">
        <div className="fixed inset-0 bg-black-new/40 backdrop-blur-[2px]" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4">
          <DialogPanel className="my-8 w-full max-w-[560px] rounded-2xl bg-white p-8 shadow-[0px_14px_40px_0px_rgba(0,0,0,0.2)] sm:p-6">
            <div className="flex items-start justify-between gap-x-6">
              <div>
                <DialogTitle className="text-2xl leading-tight font-medium tracking-tight text-black-new">
                  {t('title')}
                </DialogTitle>
                <p className="mt-2 text-sm leading-normal tracking-extra-tight text-gray-new-40">
                  {t('subtitle')}
                </p>
              </div>
              <button
                className="-mt-1 -mr-1 shrink-0 rounded-md p-1.5 text-gray-new-40 transition-colors hover:bg-gray-new-94 hover:text-black-new"
                type="button"
                onClick={close}
                aria-label={t('close')}
              >
                <CloseIcon className="size-4" aria-hidden="true" />
              </button>
            </div>

            {status === 'success' ? (
              <div className="mt-8">
                <h3 className="text-lg font-medium tracking-tight text-black-new">
                  {t('successTitle')}
                </h3>
                <p className="mt-2 text-sm leading-normal tracking-extra-tight text-gray-new-40">
                  {t('successBody')}
                </p>
                <Button
                  className="mt-6"
                  theme="primary"
                  size="new"
                  type="button"
                  handleClick={close}
                >
                  {t('close')}
                </Button>
              </div>
            ) : (
              <form className="mt-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register('company')}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                  <div>
                    <label className={labelClassName} htmlFor="name">
                      {t('name')}
                    </label>
                    <input
                      id="name"
                      className={cn(fieldClassName, errors.name && 'border-[#E5484D]')}
                      type="text"
                      placeholder={t('namePlaceholder')}
                      {...register('name', { required: t('required') })}
                    />
                    {errors.name && <p className={errorClassName}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className={labelClassName} htmlFor="email">
                      {t('email')}
                    </label>
                    <input
                      id="email"
                      className={cn(fieldClassName, errors.email && 'border-[#E5484D]')}
                      type="email"
                      placeholder={t('emailPlaceholder')}
                      {...register('email', {
                        required: t('required'),
                        pattern: { value: emailRegexp, message: t('invalidEmail') },
                      })}
                    />
                    {errors.email && <p className={errorClassName}>{errors.email.message}</p>}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-1">
                  <div>
                    <label className={labelClassName} htmlFor="education">
                      {t('education')}
                    </label>
                    <input
                      id="education"
                      className={fieldClassName}
                      type="text"
                      placeholder={t('educationPlaceholder')}
                      {...register('education')}
                    />
                  </div>
                  <div>
                    <label className={labelClassName} htmlFor="period">
                      {t('period')}
                    </label>
                    <input
                      id="period"
                      className={fieldClassName}
                      type="text"
                      placeholder={t('periodPlaceholder')}
                      {...register('period')}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className={labelClassName} htmlFor="message">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    className={cn(fieldClassName, 'min-h-[96px] resize-y')}
                    placeholder={t('messagePlaceholder')}
                    rows={3}
                    {...register('message')}
                  />
                </div>

                <div className="mt-4">
                  <span className={labelClassName}>{t('cv')}</span>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="cv"
                      className="sr-only"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      {...register('cv', {
                        required: t('fileRequired'),
                        validate: {
                          size: (files) =>
                            !files?.[0] || files[0].size <= MAX_FILE_SIZE || t('fileTooLarge'),
                          type: (files) =>
                            !files?.[0] || hasAcceptedExtension(files[0].name) || t('fileType'),
                        },
                      })}
                    />
                    <label
                      className="inline-flex h-10 cursor-pointer items-center rounded-lg border border-gray-new-60 px-4 text-sm font-medium tracking-extra-tight text-black-new transition-colors hover:border-black-new"
                      htmlFor="cv"
                    >
                      {t('cvChoose')}
                    </label>
                    <span className="truncate text-sm tracking-extra-tight text-gray-new-40">
                      {cvFile?.name || t('cvNone')}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-tight tracking-extra-tight text-gray-new-60">
                    {t('cvHint')}
                  </p>
                  {errors.cv && <p className={errorClassName}>{errors.cv.message}</p>}
                </div>

                {status === 'error' && (
                  <div className="mt-5 rounded-lg border border-[#E5484D]/30 bg-[#E5484D]/5 p-3.5">
                    <p className="text-sm font-medium tracking-extra-tight text-[#E5484D]">
                      {t('errorTitle')}
                    </p>
                    <p className="mt-1 text-xs leading-normal tracking-extra-tight text-gray-new-40">
                      {t('errorBody')}
                    </p>
                  </div>
                )}

                <div className="mt-7 flex items-center gap-x-3 sm:flex-col-reverse sm:items-stretch sm:gap-y-3">
                  <Button
                    theme="primary"
                    size="new"
                    type="submit"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? t('submitting') : t('submit')}
                  </Button>
                  <Button theme="outlined" size="new" type="button" handleClick={close}>
                    {t('cancel')}
                  </Button>
                </div>
              </form>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

ApplyModal.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default ApplyModal;
