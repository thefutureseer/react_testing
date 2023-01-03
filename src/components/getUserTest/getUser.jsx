import React from 'react'
import useUser from '../../query-hooks-test/useUser';

export default function GetUserTest() {
  const user = useUser(5);
  console.log(user)
  return (
    <div>
      { user.isError && <p>Could not fetch user....</p> }

      { user.isSuccess && <p>{user.data.name}</p> }
    </div>
  )
}
