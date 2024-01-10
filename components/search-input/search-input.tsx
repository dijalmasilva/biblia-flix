import {LucideSearch, LucideX} from "lucide-react";
import {ChangeEvent} from "react";

type Props = {
  onChange: (value: string) => void;
  placeholder?: string
  value: string
}

const SearchInput = ({onChange, value, placeholder}: Props) => {
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const clearSearch = () => {
    onChange('')
  }

  return (
    <div className="dark:bg-[#424242] shadow gap-4 text-[#C4C4C4] px-6 py-4 w-full font-light flex">
      <LucideSearch/>
      <input className="flex-1 border-none none outline-none"
             onChange={onChangeInput}
             value={value}
             style={{background: 'none'}} placeholder={placeholder} />
      {
        value.length > 0 && (
          <button onClick={clearSearch}>
            <LucideX />
          </button>
        )
      }
    </div>
  )
}

export default SearchInput