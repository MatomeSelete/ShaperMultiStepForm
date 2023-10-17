import { FormWrapper } from "./Formwrapper";
import React, { useState } from "react";

import "./Personal.css";

type PersonalData = {
    firstName: string 
    lastName: string 
    Id: string
    age: string
    race: string
    gender: string
}

type PersonalFormProps = PersonalData & {
    updateFields: (fields: Partial<PersonalData> ) => void
}

export function PersonalForm( 
    {
    firstName, 
    lastName, 
    Id,
    age,
    race,
    gender,


    updateFields, 
}: PersonalFormProps ) {
    const [idValidationMessage, setIdValidationMessage] = useState<string>("");

    function validateID(id: string) {
      const regex = /^[0-9]{13}$/; // Adjust the regex pattern according to your requirements
      if (regex.test(id)) {
        setIdValidationMessage("");
      } else {
        setIdValidationMessage("Please supply a valid 12-digit ID number");
      }
    }
   

    return (
        <>
        {/* <div className="personalForm"> */}
            <FormWrapper title="Personal Info ">


                <div className="names">
                <div className="firstname">
                <label> First name </label>
                <input
                    autoFocus
                    required
                    type='text'
                    value={firstName}
                    onChange={e => updateFields({ firstName: e.target.value })} />
                
                </div>

                <div className="lastName">
                <label> Last name </label>
                <input
                    required
                    type='text'
                    value={lastName}
                    onChange={e => updateFields({ lastName: e.target.value })} />
                </div>
                </div>

                <label> ID </label>
                <input
                    required 
                    type="text" // Consider using type="text" for ID input
                    pattern="[0-9]{13}" // Use pattern attribute for custom validation
                    value={Id}
                    onChange={(e) => {
                        const newValue = e.target.value;
                        updateFields({ Id: newValue });
                        validateID(newValue);
                      }}
                    />
                    <p className="validation-message">{idValidationMessage}</p>
                <label> Age </label>
                <input
                    required max={35}
                    type='number'
                    value={age}
                    onChange={e => updateFields({ age: e.target.value })} />
                <label> Race </label>
                <input
                    required
                    type='text'
                    value={race}
                    onChange={e => updateFields({ race: e.target.value })} />
                <label> Gender </label>
                <input
                    required
                    type='text'
                    value={gender}
                    onChange={e => updateFields({ gender: e.target.value })} />
                    


            </FormWrapper>
            
        </>
    )

}


