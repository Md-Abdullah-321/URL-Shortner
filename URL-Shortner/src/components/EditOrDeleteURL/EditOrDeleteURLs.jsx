import { useEffect, useState } from "react";

const InputField = ({ value, onChange, onClick, onBlur, readOnly }) => (
  <input className="outline-0 hover:border p-1 rounded-md"
    type="text"
    value={value}
    onChange={onChange}
    onClick={onClick}
    onBlur={onBlur}
    readOnly={readOnly}
  />
);

const EditOrDeleteURLs = () => {
  const [data, setData] = useState([]);
  const [editableInputIndex, setEditableInputIndex] = useState(-1); // -1 means no input is currently being edited

  useEffect(() => {
    const allData = Object.entries(localStorage).map(([key, value]) => ({ [key]: value }));
    setData(allData);
  }, []);

  const handleInputClick = (index) => {
    setEditableInputIndex(index);
  };

  const handleInputChange = (e, index) => {
    const newData = [...data];
    newData[index][Object.keys(newData[index])[0]] = e.target.value;
    setData(newData);
  };

  const handleInputBlur = (index) => {
    localStorage.setItem(Object.keys(data[index])[0], data[index][Object.keys(data[index])[0]]);
    setEditableInputIndex(-1);
  };

  const handleClick = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    localStorage.removeItem(Object.keys(data[index])[0]);
  };

  return (
    <div className="min-h-screen w-full bg-background flex justify-center items-center">
      <div className="w-11/12 md:w-full mx-auto text-center">
        {data.map((item, index) => {
          const isEditable = index === editableInputIndex;
          return (
            <div className="flex md:w-5/6 mx-auto justify-between md:justify-around text-start my-2 bg-block py-1 px-4 rounded-md" key={index}>
              <p className="w-3/12 truncate">{Object.keys(item)[0]}</p>
              <p className="w-5/12 truncate">
                <InputField
                  value={isEditable ? data[index][Object.keys(item)[0]] : Object.values(item)[0]}
                  onChange={(e) => handleInputChange(e, index)}
                  onClick={() => handleInputClick(index)}
                  onBlur={() => handleInputBlur(index)}
                  readOnly={!isEditable}
                />
              </p>
              <button className="w-2/12 bg-heading py-1 text-block rounded-md" onClick={() => handleClick(index)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditOrDeleteURLs;
