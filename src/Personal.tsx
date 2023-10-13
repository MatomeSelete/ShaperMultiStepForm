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
                    required min={1}
                    type='number'
                    value={Id}
                    onChange={e => updateFields({ Id: e.target.value })} />
                <label> Age </label>
                <input
                    required min={1}
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
            
            {/* <div className="Illustrations">
                <img src={Personal} alt="personal" style={{ height: "80vh", width: "100%", borderRadius: ".5rem" }} />

            </div> */}
            {/* </div> */}
        
        </>
    )

}



<form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>