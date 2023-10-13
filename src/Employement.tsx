import { FormWrapper } from "./Formwrapper";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


type EmploymentData = {
    company: string 
    position: string 
    term: string
    responsibilities: string
   
}

type EmploymentFormProps = EmploymentData & {
    updateFields: (fields: Partial<EmploymentData> ) => void
}

export function EmploymentForm( 
    {
    company, 
    position, 
    term,
    responsibilities,
    


    updateFields, 
}: EmploymentFormProps ) {
    return (
        <><FormWrapper title="Employment history">
            <label> Company name </label>
            <input
                autoFocus
                required
                type='text'
                value={company}
                onChange={e => updateFields({ company: e.target.value })} />
            <label> Position </label>
            <input
                required
                type='text'
                value={position}
                onChange={e => updateFields({ position: e.target.value })} />
            <label> Term of Employment </label>
            <input
                required min={1}
                type='text'
                value={term}
                onChange={e => updateFields({ term: e.target.value })} />
            <label> Key Responsibilities </label>
            <input
                required min={1}
                type='text'
                value={responsibilities}
                onChange={e => updateFields({ responsibilities: e.target.value })} />





        </FormWrapper>
        </>
    )
}