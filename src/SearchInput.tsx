type Props = {
  onKeyUp?: (e: { keyCode: number }) => any;
  handleChange: (value: string) => void;
  name: string;
  value: string;
};

export const SearchInput = ({ onKeyUp, name, handleChange, value }: Props) => {
  return (
    <div>
      <input
        aria-label="Person Search Input"
        className="search-input"
        type="text"
        value={value}
        name={name}
        onChange={(e) => handleChange(e.target.value)}
        onKeyUp={onKeyUp}
        placeholder={"Type a name..."}
      />
    </div>
  );
};
