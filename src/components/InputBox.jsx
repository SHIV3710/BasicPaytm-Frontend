import React from 'react'

function InputBox({title,placeholder, onChange}) {
  return (
    <>
    <div className='text-sm font-medium text-left py-2'>{title}</div>
    <input className="w-full px-2 py-1 border rounded border-slate-200" placeholder={placeholder} onChange={onChange}/>
    </>
  )
}

export default InputBox