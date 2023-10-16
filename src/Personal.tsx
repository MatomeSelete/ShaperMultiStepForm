import { FormWrapper } from "./Formwrapper";
// import Personal from "../public/personal.avif"

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
                    max={23}
                    type='number'
                    value={Id}
                    onChange={e => updateFields({ Id: e.target.value })} />
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
