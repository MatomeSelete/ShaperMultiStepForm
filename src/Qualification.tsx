import { FormWrapper } from "./Formwrapper";

type QualificationData = {
    qualification: string 
    linkedin: string 
    github: string
}

type QualificationFormProps = QualificationData & {
    updateFields: (fields: Partial<QualificationData> ) => void
}

export function QualificationForm( 
    {
    qualification, 
    linkedin, 
    github,
   
    updateFields, 
}: QualificationFormProps ) {
    return (
        <FormWrapper title="Qualification and Portfolio">
        <label> Highest Qualification </label>
        <input 
        autoFocus 
        required 
        type='text' 
        value={qualification} 
        onChange={e => updateFields({qualification: e.target.value})}
        />
        <label> LinkedIn url </label>
        <input 
        required 
        type='url' 
        value={linkedin} 
        onChange={e => updateFields({linkedin: e.target.value})}
        />
         <label> GitHub url </label>
        <input 
        required min={1} 
        type='url' 
        value={github} 
        onChange={e => updateFields({github: e.target.value})}
        />
       

        </FormWrapper>
    )

}