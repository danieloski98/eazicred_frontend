import React from 'react'
import useUser from '../../../hooks/useUser'

export default function Home() {
  const { user } = useUser()
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden">
      <div className="flex">
        <h1 className="text-4xl font-bold text-black">Welcome</h1>
        <h1 className="text-4xl font-normal text-gray-600 ml-4">{user.firstname.toUpperCase()}</h1>
      </div>
    </div>
  )
}
