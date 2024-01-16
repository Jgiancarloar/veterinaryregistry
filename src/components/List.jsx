import { useEffect } from "react"
import React from 'react'
import { useUserContext } from "./UserProvider"
import Patient from "./Patient";

const List = () => {

  const data = useUserContext();
  const { patients, setPatients } = data;


  useEffect(() => {
    let data = localStorage.getItem("register")
    if (data) {
      setPatients(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("register", JSON.stringify(patients))
  }, [patients])

  return (
    <div className="p-5 w-full md:w-2/3 lg:w-full lg:h-screen mx-auto">
      {patients && patients.length ? (
        <div>
          <p className="text-lg font-extrabold uppercase mb-5 text-center">Patient registry ({patients.length})</p>
          <div className="bg-red-300 h-full lg:h-[80vh] w-full overflow-auto p-5 rounded-lg">
            {patients.map(item => (
              <Patient
                key={item.id}
                item={item}>
              </Patient>
            ))}
          </div>
        </div>

      ) : (
        <div className="h-full w-full flex flex-col justify-center">
          <p className="text-lg font-extrabold uppercase mb-5 text-center">Patient records will be displayed here.</p>
        </div>
      )}
    </div>
  )
}

export default List