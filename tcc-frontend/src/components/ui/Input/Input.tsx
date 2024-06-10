import { useFormContext } from "react-hook-form";

interface InputProps {
  className?: string,
  label: string,
  max?: number,
  name: string,
  rules?: any,
  type?: 'date' | 'number' | 'password' | 'submit' | 'text',
  step?: number,
}

// Main
const Input = ({
  className = '', label, max, name, rules, type = 'text', step
}: InputProps) => {
  const { register, formState } = useFormContext();

  const inputStyles = formState?.errors?.[name] ? 'form-control is-invalid' : 'form-control';
  const containerStyles = `${className}`

  return (
    <div className={containerStyles}>
      <label>{label}</label>

      <input className={inputStyles} max={max} step={step} type={type} {...register(name, rules)} />

      {formState?.errors?.[name]?.message &&
        <small className="text-danger">{formState?.errors?.[name]?.message?.toString()}</small>}
    </div>
  )
}

export default Input