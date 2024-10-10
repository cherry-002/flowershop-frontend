import { ReactNode } from "react"


const Section = ({ children } : { children:ReactNode }) => {
  return (
    <div className='grid-section'>{children}</div>
  )
}

export default Section