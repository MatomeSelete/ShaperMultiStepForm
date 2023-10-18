import { FormWrapper } from "./Formwrapper";

type EmploymentAddData = {
    company: string 
    position: string 
    term: string
    responsibilities: string
   
}

type EmploymentAddFormProps = EmploymentAddData & {
    updateFields: (fields: Partial<EmploymentAddData> ) => void
}

export function EmploymentAddForm( 
    {
    company, 
    position, 
    term,
    responsibilities,
    
    updateFields, 
}: EmploymentAddFormProps ) {
    return (
        <>
        <FormWrapper title="Add employment history">
            <label> Company name </label>
            <input
                autoFocus
                required
                type='text'
                value={company}
                onChange={e => updateFields({ company: e.target.value })} 
                />
            <label> Position </label>
            <input
                required
                type='text'
                value={position}
                onChange={e => updateFields({ position: e.target.value })} 
                />
            <label> Term of Employment </label>
            <input
                required min={1}
                type='text'
                value={term}
                onChange={e => updateFields({ term: e.target.value })} 
                />
            <label> Key Responsibilities </label>
            <input
                required min={1}
                type='text'
                value={responsibilities}
                onChange={e => updateFields({ responsibilities: e.target.value })} 
                />

        </FormWrapper>
        </>
    )
}