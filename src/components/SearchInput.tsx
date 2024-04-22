import { useRouter } from "next/router";
import { useState, ChangeEvent, useEffect } from "react";
import { data, Course } from '../services/data';
import searchIcon from '../../styles/search.png';
import Image from 'next/image';

interface iDefault {
    defaultValue: string | null,
    placeholder?: string
}

export const SearchInput = ({ defaultValue, placeholder }: iDefault) => {
    const [inputValue, setInputValue] = useState<string>(defaultValue || "");
    const [suggestions, setSuggestions] = useState<Course[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const [isClient, setIsClient] = useState<boolean>(false);
    //const router = useRouter();

    useEffect(() => {
        setIsClient(true); // Set client-side flag after component mounts
    }, []);

    useEffect(() => {
        if (inputValue) {
            const filteredData = data.filter(course =>
                course.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            setSuggestions(filteredData);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [inputValue]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSearch = (courseId: number) => {
        if (isClient) { // Ensure router actions are client-side
            //router.push(`/?q=${courseId}`);
            setInputValue('');
            setShowSuggestions(false);
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && suggestions.length > 0) {
            handleSearch(suggestions[0].id);
        }
    };

    return (
        <div className="search__input relative border-[3px] border-solid border-slate-500 flex flex-col items-center gap-5 p-1 rounded-[15px]">
            <Image src={searchIcon} alt="Search Icon" width={24} height={24} />
            <input type="text"
                id="inputId"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3" />
            {showSuggestions && (
                <ul className="absolute z-10 w-full bg-gray-600 shadow-md max-h-60 overflow-auto">
                    {suggestions.map((suggestion) => (
                        <li key={suggestion.id} onClick={() => handleSearch(suggestion.id)} className="p-2 hover:bg-black cursor-pointer">
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
