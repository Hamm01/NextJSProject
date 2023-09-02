'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: '',
    password: ''
  })
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen">
      <h1 className="text-4xl">Login</h1>
      <br />

      <input
        type="text"
        id="email"
        value={user.email}
        className="block rounded-md border-0 p-4 pr-6 pl-6 mb-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        placeholder="email"
        onChange={e => setUser({ ...user, email: e.target.value })}
      ></input>

      <input
        type="text"
        name="password"
        id="password"
        value={user.password}
        className="block rounded-md border-0 p-4 pr-6 pl-6 mb-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        placeholder="password"
        onChange={e => setUser({ ...user, password: e.target.value })}
      ></input>

      <button className="bg-blue-500 hover:bg-blue-700 mb-5 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
      <Link href="/signup">Visit SignUp Page</Link>
    </div>
  )
}
