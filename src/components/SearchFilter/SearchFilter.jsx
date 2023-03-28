
export const SearchFilter = ({value, onChange}) => {
    return (
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    );
}