import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/router'

export default function BackButton() {
  const backButton = useRouter();

  return (
    <div className='flex'>
      <IoIosArrowBack onClick={() => backButton.back} />
    </div>
  )
}
