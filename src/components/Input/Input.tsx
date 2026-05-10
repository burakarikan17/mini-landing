import { type InputHTMLAttributes, useId } from 'react';
import './Input.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

/**
 * Renders a labeled input with helper and error messaging.
 * @param props Input configuration and native input attributes.
 * @returns Input field wrapper.
 */
const Input = ({
  label,
  error,
  helperText,
  fullWidth = false,
  className = '',
  id: externalId,
  ...rest
}: InputProps) => {
  const autoId = useId();
  const inputId = externalId || autoId;
  const errorId = error ? `${inputId}-error` : undefined;
  const helperId = helperText && !error ? `${inputId}-helper` : undefined;

  const wrapperClass = [
    'input',
    error ? 'input--error' : '',
    fullWidth ? 'input--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClass}>
      {label && (
        <label className="input__label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <input
        id={inputId}
        className="input__field"
        aria-invalid={!!error || undefined}
        aria-describedby={errorId || helperId || undefined}
        {...rest}
      />

      {error && (
        <span id={errorId} className="input__error" role="alert">
          {error}
        </span>
      )}

      {helperText && !error && (
        <span id={helperId} className="input__helper">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
