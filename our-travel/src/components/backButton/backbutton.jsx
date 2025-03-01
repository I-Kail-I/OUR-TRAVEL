"use client"
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation'  // Changed from next/compat/router

export default function BackButton() {
  const router = useRouter();

  return (
    <div className='flex'>
      <IoIosArrowBack 
        className="cursor-pointer" 
        onClick={() => router.back()} 
        size={24} 
      />
    </div>
  )
}