import './search-box.style.css';

const SearchBox = ({className, placeholder, onChangeHandler }) => {
        return (
            <div>
                <input 
                    className= { className }
                    type='search' 
                    placeholder= { placeholder }
                    onChange={ onChangeHandler }
                />
            </div>
        )
}

export default SearchBox