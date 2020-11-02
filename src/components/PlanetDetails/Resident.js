import React, { useEffect, useState } from "react";
import { List } from 'semantic-ui-react'

export const Resident = (props) => {
    const {residentUrl} = props;
    const [resident, setResident] = useState({})
    useEffect(()=>{
        fetch(residentUrl)
        .then((response)=>{return response.ok ? response.json() : {name: 'Unknown'}})
        .then(data=>setResident(data))
    }, [])
    return <List.Item><List.Icon name='user' /> {resident.name}</List.Item>
};