import Head from 'next/head'
import {useState, useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [to, setToDo]= useState ('')
  useEffect(()=>{
    if(to==='Hello')
    {
      alert('Welcome To ToDo App')
    }
    if(to==='100')
    {
      alert('Number is displayed in ToDo App')
    }
    if(todo==="ankur"){
      alert("this is todo app")
    }
   }, [todo])
    if(to==="world"){
      alert("This is todoapp")
    }
   }, [to])


  // useEffect(()=>{
  //     alert('Welcome To ToDo App')
  // }, [])

 return (
    <>
      <Head>
        <title>ToDo App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>ToDo App</h1>
        <h2>
        {
          to
        }
        </h2>
        <input placeholder='add todo' type="text" value={to} onChange={e=> setToDo(e.target.value)}/> 
        <button> submit </button>
      </div>
    </>
  )
}
