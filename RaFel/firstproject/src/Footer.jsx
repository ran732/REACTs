import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function Footer({children}) {
  return (
    <div>
      <h1 className='text-center'>Footer Sections</h1>
      {children}
    </div>
  )
}
