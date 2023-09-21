import { FC } from "react"

interface inputProps {
  label: string
  placeholder: string
  type: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const Input: FC<inputProps> = ({
  label,
  placeholder,
  type,
  value,
  setValue,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm text-black" htmlFor="">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        type={type}
        placeholder={placeholder}
        className="px-3 py-2 border border-gray-400 rounded-lg"
      />
    </div>
  )
}
