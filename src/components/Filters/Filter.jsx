import React, { useState } from 'react'
import styled from 'styled-components';

const SelectStyle = styled.select`
    width: 215px;
    height: 34px;
`;

export default function Filter(props) {
    const [selectedValue, setSelectedValue] = useState();
  
    const handleChange = (e) => {
      setSelectedValue(e.target.value);
      props.onChange?.(e);
    };
  return (
    <div>
        <h4>{props.heading}</h4>
        <SelectStyle
            value={selectedValue}
            onChange={handleChange}
        >
            {props.user.length &&  props.user?.map((item, index) => (
                <option key={index} value={item.value}>
                {item.label}
                </option>
            ))}
        </SelectStyle>
  </div>
  )
}
