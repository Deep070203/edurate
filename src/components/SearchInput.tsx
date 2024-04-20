import { useRouter } from 'next/router';
import { useState, ChangeEvent, useEffect } from 'react';

interface SearchInputProps {
    defaultValue: string | null;
    placeholder?: string;
}

export const SearchInput = ({ defaultValue, placeholder }: SearchInputProps) => {
    const [inputValue, setInputValue] = useState<string | null>(defaultValue);
    const [isReady, setIsReady] = useState(false);
    const router = useRouter();

    // Hook to set the readiness of the router
    useEffect(() => {
        if (router.isReady) {
            setIsReady(true);
        }
    }, [router.isReady]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        // Only execute the search if the router is ready
        if (inputValue && isReady) {
            router.push(`/?q=${inputValue}`);
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search__input border-2 border-solid border-slate-500 flex flex-row items-center gap-5 p-1 rounded-2xl">
            <input
                type="text"
                placeholder={placeholder ?? 'Enter your keywords'}
                value={inputValue ?? ''}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className="bg-transparent outline-none border-none w-full py-3 pl-2 pr-3"
            />
        </div>
    );
};
