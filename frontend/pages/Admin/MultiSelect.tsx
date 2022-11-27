import React from "react";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const MultiSelect = ({ options, optionSelected, setOptionSelected }) => {
  const handleChange = (selected) => {
    setOptionSelected(selected);
  };
  return (
    <span
      className="d-inline-block w-[250px] border-black"
      data-toggle="popover"
      data-trigger="focus"
      data-content="Please select variant(s)"
    >
      <ReactSelect
        options={options}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={true}
        components={{
          Option,
        }}
        onChange={handleChange}
        allowSelectAll={true}
        value={optionSelected}
      />
    </span>
  );
};

export default MultiSelect;
