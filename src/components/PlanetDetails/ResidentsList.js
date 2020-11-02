import React from "react";
import { Resident } from './Resident'

export const ResidentsList = (props) => {
    const {residents} = props;
    return (<>
        {residents && residents.map((item, index)=><Resident key={index} residentUrl={item}/>)}
        </>
    );
};
