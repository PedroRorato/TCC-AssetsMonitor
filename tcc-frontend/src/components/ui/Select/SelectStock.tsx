import { useFormContext } from "react-hook-form";

interface SelectStockProps {
  className: string,
  label: string,
  name: string,
  options: any[],
  rules: any,
}

const SelectStock = ({ className, label, name, options, rules }: SelectStockProps) => {
  const { register, formState } = useFormContext();

  const inputStyles = formState?.errors?.[name] ? 'form-select is-invalid' : 'form-select';

  return (
    <div className={className}>
      <label>{label}</label>

      <select className={inputStyles} {...register(name, rules)} >
        {options.map(option => (
          <option key={option.ticker} value={`${option.ticker}|${option.name}`}>
            {option.ticker} - {option.name}
          </option>
        ))}
      </select>

      {formState?.errors?.[name]?.message &&
        <small className="text-danger">{formState?.errors?.[name]?.message?.toString()}</small>}
    </div>
  )
}

export default SelectStock;