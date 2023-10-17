import { FormWrapper } from "./Formwrapper";
import React, { useState } from "react"; // Import React and useState

type  EmploymentData = {
  workHistory: WorkHistoryItem[];
};


type WorkHistoryItem = {
  company: string;
  position: string;
  term: string;
  responsibilities: string;
};

type EmploymentFormProps = EmploymentData & {
    updateFields: (fields: Partial<EmploymentData>) => void;
  };


export function EmploymentForm({
    workHistory: [firstJob],
  updateFields,
}: EmploymentFormProps) {
  const [company, setCompany] = useState(firstJob?.company || "");
  const [position, setPosition] = useState(firstJob?.position || "");
  const [term, setTerm] = useState(firstJob?.term || "");
  const [responsibilities, setResponsibilities] = useState(firstJob?.responsibilities || "");


  // Define an updateFields function specifically for this component
  function updateEmploymentFields(fields: Partial<EmploymentData>) {
  updateFields({
    workHistory: [{ ...firstJob, ...fields }],
  });
}


    return (
        <>
        <FormWrapper title="Employment history">
            <label> Company name </label>
            <input
                autoFocus
                required
                type='text'
                value={company}
                // onChange={e => updateFields({ company: e.target.value })} 
                onChange={(e) => setCompany(e.target.value)} // Update the state using setCompany
                />
            <label> Position </label>
            <input
                required
                type='text'
                value={position}
                // onChange={e => updateFields({ position: e.target.value })} 
                onChange={(e) => setPosition(e.target.value)} // Update the state using setPosition
            />
            <label> Term of Employment </label>
            <input
                required min={1}
                type='text'
                value={term}
                // onChange={e => updateFields({ term: e.target.value })} 
                onChange={(e) => setTerm(e.target.value)} // Update the state using setTerm
            />
            <label> Key Responsibilities </label>
            <input
                required min={1}
                type='text'
                value={responsibilities}
                // onChange={e => updateFields({ responsibilities: e.target.value })}
                onChange={(e) => setResponsibilities(e.target.value)} // Update the state using setResponsibilities
            />

            {/* <button> Add more </button> */}



        </FormWrapper>
        </>
    )
}


