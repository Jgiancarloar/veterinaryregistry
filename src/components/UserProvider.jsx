import React, { useState, useContext } from 'react'

const userContext = React.createContext();

export function useUserContext() {
    return useContext(userContext)
}

export const UserProvider = (props) => {

    const [patients, setPatients] = useState([])
    const [id, setId] = useState("")
    const [owner, setOwner] = useState("")
    const [mail, setMail] = useState("")
    const [date, setDate] = useState("")
    const [pet, setPet] = useState("")
    const [symptoms, setSymptoms] = useState("")
    const [edit,setEdit] = useState(false)

    const data = { patients, setPatients, id, setId, owner, setOwner, mail, setMail, date, setDate, pet, setPet, symptoms, setSymptoms, edit, setEdit }

    return (
        <userContext.Provider value={data}>
            {props.children}
        </userContext.Provider>
    )
}
