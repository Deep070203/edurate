import { useState, ChangeEvent, useEffect } from "react";
import searchIcon from '../../styles/search.png';
import Image from 'next/image';

interface iDefault {
    defaultValue: string | null,
    placeholder?: string
}

export const SearchInput = ({ defaultValue, placeholder }: iDefault) => {
    const [inputValue, setInputValue] = useState<string>(defaultValue || "");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

    useEffect(() => {
        if (inputValue) {
            fetchSuggestions(inputValue);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [inputValue]);

    const fetchSuggestions = async (input: string) => {
        try {
            const response = await fetch(`/api/universities?search=${encodeURIComponent(input)}`);
            const data = await response.json();
            setSuggestions(data.suggestions);
            setShowSuggestions(true);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSearch = (selectedUniversity: string) => {
        setInputValue(selectedUniversity);
        setShowSuggestions(false);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && suggestions.length > 0) {
            handleSearch(suggestions[0]);
        }
    };

    return (
        <div className="search__input relative border-[3px] border-solid border-slate-700 flex items-center gap-4 p-4 rounded-[20px]" style={{ minWidth: '500px' }}>
            <div style={{ flexShrink: 0 }}>
                <Image src={searchIcon} alt="Search Icon" width={24} height={24} />
            </div>
            <input
                type="text"
                id="inputId"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className="bg-gray-800 rounded-[15px] outline-none border-none w-full py-2 pl-10 pr-3 text-lg"
                style={{ flexGrow: 1 }}
            />
            {showSuggestions && (
                <ul className="absolute z-10 w-100% bg-gray-600 shadow-md overflow-auto rounded-[12px]" style={{ top: '95%', left: '11%' }}>
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSearch(suggestion)} className="p-2 hover:bg-gray-800 cursor-pointer">
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
