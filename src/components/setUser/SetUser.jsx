import React from 'react'
import useCreateUser from '../../query-hooks-test/useCreateUser'

export default function SetUser() {
  const mutation = useCreateUser()
  return (
    <div>
     <button type="button" onClick={() => {
      //  console.log("mutation.mutate.data.name " + mutation.mutate.data.name)
       mutation.mutate({ name: "Mike Doe", age: 50 }) }}>Mutation</button>
    
     {mutation.isError && <p>Could not create user....</p>}

     {mutation.isSuccess && <p>{mutation.data.name}</p>}
    </div>
  )
}