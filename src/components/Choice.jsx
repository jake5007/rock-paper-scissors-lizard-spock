import React from "react";
import Pick from "./Pick";

const Choice = ({ options, onUserClick }) => {

    return (
        <div className="pentagon">
            <img src="/images/bg-pentagon.svg" alt="pentagon" />
            {
                options.map(option => 
                    <Pick 
                        key={option.id}
                        option={option}
                        onUserClick={onUserClick}
                    />
                )
            }
        </div>
    )
}

export default Choice;