import React from 'react'

let ToggleSort = props => {
    const {toggleOptions, defaultSort, isActive, onChange} = props;     
    return (
        <div aria-label="First group" className="btn-group" data-toggle="buttons">
            {toggleOptions.map((option) => {
                 let lclass = (option.name == (isActive?isActive:defaultSort)) 
                    ? 'btn active' 
                    : 'btn'; 
                return (
                    <label key={option.id} className={lclass}>
                        <input
                            id={"options" + option.id}
                            name={"options"}
                            value={option.name}
                            type="radio"
                           onChange={() => {onChange(option.name)}}
                            />{option.name}
                    </label>
                );
            })}
        </div>
    );
}
export default ToggleSort;

