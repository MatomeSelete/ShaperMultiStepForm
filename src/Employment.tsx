
import { FormWrapper } from "./Formwrapper";
import React, { useState } from "react";

type WorkHistoryItem = {
  company: string;
  position: string;
  term: string;
  responsibilities: string;
};

type EmploymentData = {
  workHistory: WorkHistoryItem[];
};

type EmploymentFormProps = EmploymentData & {
  updateFields: (fields: Partial<EmploymentData>) => void;
};

export function EmploymentForm({
  workHistory,
  updateFields,
}: EmploymentFormProps) {
  function addWorkHistory() {
    const newWorkHistoryItem = {
      company: "",
      position: "",
      term: "",
      responsibilities: "",
    };
    updateFields({
      workHistory: [...workHistory, newWorkHistoryItem],
    });
  }

  function updateWorkHistoryField(index: number, field: string, value: string) {
    const updatedWorkHistory = [...workHistory];
    updatedWorkHistory[index] = {
      ...updatedWorkHistory[index],
      [field]: value,
    };
    updateFields({
      workHistory: updatedWorkHistory,
    });
  }

  return (
    <>
      <FormWrapper title="Employment history">
        {workHistory.map((workHistoryItem, index) => (
          <div key={index}>
            <label> Company name </label>
            <input
              autoFocus
              required
              type="text"
              value={workHistoryItem.company}
              onChange={(e) => updateWorkHistoryField(index, "company", e.target.value)}
            />
            <label> Position </label>
            <input
              required
              type="text"
              value={workHistoryItem.position}
              onChange={(e) => updateWorkHistoryField(index, "position", e.target.value)}
            />
            <label> Term of Employment </label>
            <input
              required
              type="text"
              value={workHistoryItem.term}
              onChange={(e) => updateWorkHistoryField(index, "term", e.target.value)}
            />
            <label> Key Responsibilities </label>
            <input
              required
              type="text"
              value={workHistoryItem.responsibilities}
              onChange={(e) => updateWorkHistoryField(index, "responsibilities", e.target.value)}
            />
          </div>
        ))}

        <button onClick={addWorkHistory}>Add Work History</button>
      </FormWrapper>
    </>
  );
}













// import { FormWrapper } from "./Formwrapper";
// import React, { useState } from "react"; // Import React and useState
// import { data } from "jquery";

// type  EmploymentData = {
//   workHistory: WorkHistoryItem[];
// };


// type WorkHistoryItem = {
//   company: string;
//   position: string;
//   term: string;
//   responsibilities: string;
// };

// type EmploymentFormProps = EmploymentData & {
//     updateFields: (fields: Partial<EmploymentData>) => void;
//   };


// export function EmploymentForm({
//     workHistory: [firstJob],
//   updateFields,
// }: EmploymentFormProps) {
//   const [company, setCompany] = useState(firstJob?.company || "");
//   const [position, setPosition] = useState(firstJob?.position || "");
//   const [term, setTerm] = useState(firstJob?.term || "");
//   const [responsibilities, setResponsibilities] = useState(firstJob?.responsibilities || "");


//   // Define an updateFields function specifically for this component
//   function updateEmploymentFields(fields: Partial<EmploymentData>) {
//   updateFields({
//     workHistory: [{ ...firstJob, ...fields }],
//   });
// }

// function addWorkHistory() {
//   const newWorkHistoryItem = {
//     company: "",
//     position: "",
//     term: "",
//     responsibilities: "",
//   };
//   updateFields({
//     workHistory: [...data.workHistory, newWorkHistoryItem],
//   });
// }


//     return (
//         <>
//         <FormWrapper title="Employment history">
//         {data.workHistory.map((workHistoryItem, index) => (
//           <div key={index}>
//             <label> Company name </label>
//             <input
//                 autoFocus
//                 required
//                 type='text'
//                 value={workHistoryItem.company}
//                 onChange={(e) => updateWorkHistoryField(index, "company", e.target.value)}
//                 />
//             <label> Position </label>
//             <input
//                 required
//                 type='text'
//                 value={workHistoryItem.position}
//                 onChange={(e) => updateWorkHistoryField(index, "position", e.target.value)}
//             />
//             <label> Term of Employment </label>
//             <input
//                 required min={1}
//                 type='text'
//                 value={workHistoryItem.term}
//                 onChange={(e) => updateWorkHistoryField(index, "term", e.target.value)}
//             />
//             <label> Key Responsibilities </label>
//             <input
//                 required min={1}
//                 type='text'
//                 value={workHistoryItem.responsibilities}
//                 onChange={(e) => updateWorkHistoryField(index, "responsibilities", e.target.value)}
//             />

//             {/* <button> Add more </button> */}

//             </div>
//   ))}

//         </FormWrapper>
//         </>
//     )
// }



