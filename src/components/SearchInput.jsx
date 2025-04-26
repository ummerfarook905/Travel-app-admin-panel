 const SearchInput = ({value,onChange,placeholder}) => (

    <input 
    type ="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
    />

 )

 export default SearchInput;

