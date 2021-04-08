import React from 'react';

const Frequency = ({ value, onChange, children})=>
    <form onSubmit={onChange}>
        <input
            type="number"
            min="0"
            value={value}
            onChange={ (event) => {
                event.persist();
                onChange(event);
            }}
        />
        {children}

    </form>;

export default Frequency;