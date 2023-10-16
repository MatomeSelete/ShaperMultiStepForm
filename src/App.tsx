import { FormEvent, useState } from "react"
import { useMultistepForm } from "./ useMultistepForm"
import { PersonalForm } from "./Personal"
import { ContactsForm } from "./contact"
import { QualificationForm } from "./Qualification"
import { EmploymentForm } from "./Employement"
import { EmploymentAddForm } from "./EmployementAdd"

import Personal from "../public/personal.avif"

import "./App.css";

type FormData = {
  firstName: string,
  lastName: string,
  Id: string,
  age: string,
  race: string,
  gender: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  phone: string,
  town: string,
  province: string,
  qualification: string,
  linkedin: string,
  github: string,
  workHistory: [
    {
      company: string,
      position: string,
      term: string,
      responsibilities: string,
    }, 
     ]
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  Id: "",
  age: "",
  gender: "",
  race: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  phone: "",
  town: "",
  province: "",
  qualification: "", 
  linkedin: "", 
  github: "",
  // company: "",
  // position: "",
  // term: "",
  // responsibilities: "",

  workHistory: [
    {
      company: "",
      position: "",
      term: "",
      responsibilities: "",
    }, 
  ]
  
}


function App() {
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>) {
    setData(prev  => {
      return { ...prev, ...fields }
    })
  }

  const {
    steps, currentSteperIndex, step, isFirstStep, back, next, isLastStep} = 
    useMultistepForm([
    <PersonalForm {...data} updateFields={updateFields} />,
    <ContactsForm  {...data} updateFields={updateFields} />,
    <QualificationForm {...data} updateFields={updateFields} />,
    <EmploymentForm {...data} updateFields={updateFields} />,
    // <EmploymentAddForm {...data} updateFields={updateFields} />,
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next() 
    alert("Successful account Creation")
    console.log(data)
  }
  return (
    <div className="appHome">
      <div className="formIllustrations">
      <div className="formDiv">
      <form onSubmit={onSubmit} >
        <div className="pageCounter" >
          {currentSteperIndex + 1} / {steps.length}
  
        </div>
        {step}
        <div className="backNextBtn" >
          {isFirstStep && (
            <button className="backBtn" type="button" onClick={back}>
              Back
            </button>
          )}
  
          <button className="nextBtn" type="submit">
            {isLastStep ? "Finish" : "Next"}
          </button>
  
        </div>
      </form>
      </div>
      
      <div className="Illustrations">
        <img src={Personal} alt="personal" style={{height: "77vh", width: "99%", borderRadius: ".5rem"}}/>

      </div> 

      </div>
    </div>
    
  )
}

export default App



