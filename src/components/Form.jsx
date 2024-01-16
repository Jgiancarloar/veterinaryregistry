import React from 'react'
import { useUserContext } from './UserProvider'


const Form = () => {

    const data = useUserContext();

    const { patients, setPatients, owner, setOwner, mail, setMail, date, setDate, pet, setPet, symptoms, setSymptoms, edit, setEdit, id } = data;

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([owner, setOwner, mail, setMail, date, setDate, pet, setPet, symptoms, setSymptoms].includes("")) {
            alert("There are empty fields!")
            return;
        }

        setPatients([...patients, {
            id: patients.length,
            owner: owner,
            pet: pet,
            mail: mail,
            date: date,
            symptoms: symptoms
        }])
        setOwner("")
        setMail("")
        setDate("")
        setPet("")
        setSymptoms("")

    }

    const handleSaveEdit = (e) => {
        e.preventDefault();

        if ([owner, setOwner, mail, setMail, date, setDate, pet, setPet, symptoms, setSymptoms].includes("")) {
            alert("There are empty fields!")
            return;
        }

        const newPatients = patients.map(item => item.id === id ? { id, owner: owner, mail: mail, date: date, pet: pet, symptoms: symptoms } : item)
        setPatients(newPatients)
        setEdit(false)
        setOwner("")
        setMail("")
        setDate("")
        setPet("")
        setSymptoms("")
    }

    return (
        <div className='w-full md:w-2/3 lg:w-full lg:h-screen flex flex-col items-center p-5 mx-auto'>
            <h2 className="text-lg font-extrabold uppercase pb-5 text-center">Patient registration</h2>
            <form
                onSubmit={handleSubmit}
                className='bg-red-300 flex flex-col w-full p-5 rounded-lg'>
                <label
                    className='mb-1 font-bold'
                    htmlFor="owner">Owner name</label>
                <input
                    className='block w-full py-1 px-2 rounded-md mb-2'
                    type="text"
                    placeholder="..."
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                />
                <label
                    className='mb-1 font-bold'
                    htmlFor="email">Owner's mail</label>
                <input
                    className='block w-full py-1 px-2 rounded-md mb-2'
                    type="email"
                    placeholder='...'
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
                <label
                    className='mb-1 font-bold'
                    htmlFor="date">Date</label>
                <input
                    className='block w-fit py-1 px-2 rounded-md mb-2'
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <label
                    className='mb-1 font-bold'
                    htmlFor="pet">Pet's name</label>
                <input
                    className='block w-full py-1 px-2 rounded-md mb-2'
                    type="text"
                    placeholder='...'
                    value={pet}
                    onChange={(e) => setPet(e.target.value)}
                />
                <label
                    className='mb-1 font-bold'
                    htmlFor="symptoms">Symptoms</label>
                <textarea
                    className='block w-full py-1 px-2 h-40 rounded-md mb-5'
                    placeholder='Enter the details of the symptoms'
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                ></textarea>
                <button
                    onClick={edit ? handleSaveEdit : handleSubmit}
                    className={edit ? 'py-2 w-56 mx-auto rounded-md font-bold bg-green-600 text-white hover:bg-green-500'
                        : 'py-2 w-56 mx-auto rounded-md font-bold bg-white hover:bg-stone-100'}>{edit ? "Save changes" : "Add"}</button>
            </form>
        </div>
    )
}

export default Form