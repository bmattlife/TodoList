function ListControl({ handleClick, handleChange, textValue }) {
    return (
        <div>
            <input type="text" onChange={handleChange} value={textValue} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default ListControl;
