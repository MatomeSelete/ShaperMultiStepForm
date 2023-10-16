import { FormWrapper } from "./Formwrapper";



type  ContactsData = {
    email: string 
    phone: string
    town: string
    province: string
}



type ContactsFormProps = ContactsData & {
    updateFields: (fields: Partial<ContactsData> ) => void
}

export function ContactsForm({email, phone, town, province, updateFields, }: ContactsFormProps) {
    return (
    <FormWrapper title="Contact Info">
    <label> Email </label>
    <input
        autoFocus 
        required 
        type='email' 
        value={email} 
        onChange={e => updateFields({email: e.target.value})} 
     />
    <label> Phone Number </label>
    <input 
        required 
        type='tel' 
        value={phone} 
        onChange={e => updateFields({phone: e.target.value})} 
    />
    <label> Town/City </label>
    <input 
        required 
        type='text' 
        value={town} 
        onChange={e => updateFields({town: e.target.value})} 
    />
     <label> Province </label>
    <input 
        required 
        type='text' 
        value={province} 
        onChange={e => updateFields({province: e.target.value})} 
    />
    </FormWrapper>)
}