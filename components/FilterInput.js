import React from "react";

const CountersInput = ({ index, props }) => (
    <input className="price-input"
           data-index={index}
           {...props}
    />
);

export const CounterFilter = ({ value, onChange }) => (
    <div className="counter">
        <CountersInput
            value={value[0]}
            onChange={onChange}
            index="0"
        />
        -
        <CountersInput
            value={value[1]}
            onChange={onChange}
            index="1"
        />
        -
    </div>
);