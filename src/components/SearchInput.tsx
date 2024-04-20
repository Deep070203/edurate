import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import searchIcon from '../../styles/search.png';
import Image from 'next/image';

interface iDefault {
    defaultValue: string | null,
    placeholder?: string  // Adding placeholder as an optional property
}

export const SearchInput = ({ defaultValue, placeholder }: iDefault) => {
    const router = useRouter()
    const [inputValue, setValue] = useState(defaultValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    }

    const handleSearch = () => {
        if (inputValue) return router.push(`/?q=${inputValue}`);
        if (!inputValue) return router.push("/")
    }

    const handleKeyPress = (event: { key: any; }) => {
        if (event.key === "Enter") return handleSearch()
    }

    return (
        <div className="search__input border-[2px] border-solid border-slate-500 flex flex-row items-center gap-5 p-1 rounded-[15px]">
            <Image src={searchIcon} alt="Search Icon" />
            <input type="text"
                id="inputId"
                placeholder={placeholder}  // Utilize the placeholder prop
                value={inputValue ?? ""}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3" />
        </div>
    );
}
