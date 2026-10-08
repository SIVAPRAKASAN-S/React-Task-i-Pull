import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDob] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");


  function handleSubmit(event) {
    event.preventDefault();

    console.log("Name:", name);
    console.log("Age:",age);
    console.log("Email:", email);
    console.log("DOB:",DOB);
    console.log("street:",street);
    console.log("state:",state);
    console.log("country:",country);
    console.log("region:",region);
 
 
    
   alert("Form submitted successfully!");
    
  }

  return (
    <div>
      <h1>Student Form</h1>

      <form onSubmit={handleSubmit}>
        
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <br /><br />

        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br /><br />

         <label>DOB:</label>
        <input
          type="text"
          value={DOB}
          onChange={(event) => setDob(event.target.value)}
        />

        <br /><br />

         <label>street:</label>
        <input
          type="text"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
        />

        <br /><br />

         <label>state:</label>
        <input
          type="text"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />

        <br /><br />

         <label>country:</label>
        <input
          type="text"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />

        <br /><br />

         <label>region:</label>
        <input
          type="text"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
        />

        <br /><br />
        
        

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Form;



