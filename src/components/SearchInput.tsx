import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import { data, Course } from '../services/data.js'; // Make sure the import path is correct
import searchIcon from '../../styles/search.png';
import Image from 'next/image';

interface iDefault {
    defaultValue: string | null,
    placeholder?: string
}

export const SearchInput = ({ defaultValue, placeholder }: iDefault) => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState(defaultValue);
    const [selectedCourse, setSelectedCourse] = useState<number | string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCourse(event.target.value);
    };

    const handleSearch = () => {
        if (selectedCourse) return router.push(`/?q=${selectedCourse}`);
        if (!selectedCourse && inputValue) return router.push(`/?q=${inputValue}`);
        if (!selectedCourse && !inputValue) return router.push("/");
    };

    const handleKeyPress = (event: { key: any; }) => {
        if (event.key === "Enter") handleSearch();
    };

    return (
        <div className="search__input border-[3px] border-solid border-slate-500 flex flex-row items-center gap-5 p-1 rounded-[15px]">
            <Image src={searchIcon} alt="Search Icon" className="4px-4px" />
            <input type="text"
                id="inputId"
                placeholder={placeholder}
                value={inputValue ?? ""}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3" />
            <select value={selectedCourse} onChange={handleDropdownChange} className="outline-none border-none bg-[transparent]">
                <option value="">Select a course</option>
                {data.map((course: Course) => (
                    <option key={course.id} value={course.id}>{course.name}</option>
                ))}
            </select>
        </div>
    );
};
