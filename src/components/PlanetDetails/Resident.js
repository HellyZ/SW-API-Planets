import React, { useEffect, useState } from "react";
import { List } from 'semantic-ui-react'

export const Resident = (props) => {
    const {residentUrl} = props;
    const parsedUrl = new URL(residentUrl);

    const [resident, setResident] = useState({})
    useEffect(()=>{
        fetch(`https://${parsedUrl.host}${parsedUrl.pathname}`)
        .then((response)=>{return response.ok ? response.json() : {name: 'Unknown'}})
        .then(data=>setResident(data))
    }, [residentUrl])
    return <List.Item><List.Icon name='user' /> {resident.name}</List.Item>
};
