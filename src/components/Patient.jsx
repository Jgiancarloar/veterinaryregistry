import React from 'react'
import { useUserContext } from "./UserProvider"

const Patient = ({ item }) => {
  const { owner, mail, date, pet, symptoms } = item;

  const data = useUserContext();
  const { patients, setPatients, setId, setOwner, setMail, setDate, setPet, setSymptoms,setEdit } = data;

  const handleDelete = () => {
    const respuesta = confirm("Do you want to delete the record?");
    if (respuesta) {
      const newPatients = patients.filter((patients) => patients.id !== item.id);
      setPatients(newPatients)
    }
  }

  const handleEdit = () => {
    setId(item.id)
    setOwner(owner)
    setMail(mail)
    setDate(date)
    setPet(pet)
    setSymptoms(symptoms)
    setEdit(true)
  }

  return (
    <div className='flex flex-col bg-stone-100 p-5 mb-5 rounded-lg'>
      <div>
        <p className='mb-1 capitalize'><span className='font-bold'>Owner name: </span>{owner}</p>
        <p className='mb-1'><span className='font-bold'>Owner's mail: </span>{mail}</p>
        <p className='mb-1'><span className='font-bold'>Date: </span>{date}</p>
        <p className='mb-1 capitalize'><span className='font-bold'>Pet's name: </span>{pet}</p>
        <p className='mb-5'><span className='font-bold'>Symptoms: </span>{symptoms}</p>
      </div>
      <div className='flex flex-row justify-around'>
        <button
          onClick={handleEdit}
          className='bg-amber-500 py-2 w-28 rounded-md text-white font-bold hover:bg-amber-400'>Edit</button>
        <button
          onClick={handleDelete}
          className='bg-red-500 py-2 w-28 rounded-md text-white font-bold hover:bg-red-400'>Delete</button>
      </div>
    </div>
  )
}

export default Patient