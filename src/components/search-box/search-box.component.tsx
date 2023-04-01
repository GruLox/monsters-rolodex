import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }: {placeholder: string, handleChange: any}) => {
    return (
        <input 
            className="search"
            type="search" 
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}