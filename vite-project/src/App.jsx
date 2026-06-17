function App(){
  return(
    <div 
    style={{
      width: "700px",
      margin: "30px auto",
      padding:"25px",
      borderRadius:"15px",
      boxShadow:
      "0 0 15px rgba(0,0,0,0,0.2)"
    }}
    >
      <h1 style={{
        textAlign:"center"
      }}
      >
        learner registration
      </h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={Name} 
        onChange={(e) =>
          setName(e.target.value)
        }
        style={inputStyle}
      ></input>
      <input 
        type="email"
        placeholder="Enter Email"
        value={Email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        style={inputStyle}
        ></input>
        <input
        type="text"
        placeholder="Enter Department"
        value={Deportment}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
        style={inputStyle}
        ></input>

        <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e)=> 
        setAge(e.target.value)
        }
        style={inputStyle}
        ></input>
        <button
        onClick={handleSubmit}
        style={buttonStyle}
        
        > 
      {
        editIndex !== null
        ?

        "update Student"

      :

      "Add student"
      }
        </button>
        <h2>
          Student List
        </h2>
        <table
        border="1"
        cellPadding="10"
        style={{
          width:"100%",

          borderCollapse:

          "collapse"


        }}

        >

        
        <thead>
          <tr>
            <th> Name </th>
            <th>Email</th>
            <th>Department</th>
            <th> Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {

          student.map(

            (student,index) => (
              <tr key={index}>
                <td>
                  {student.name}
                </td>
                <td>
                  {student.email}
                </td>
                <td>
                  {student.department}
                </td>
                <td>
                  {student.age}
                </td>
                <td>
                  <button
                 onClick={() =>
                  handleEdit(index)
                }
                  >
                Edit
                  </button>
                  <button
                  onClick={() =>
                    handleDelete(index)
                  }
                  style={{
                    marginLeft:
                    "10px"
                  }}
                  >
                    Delete
                  </button>
                </td>
                </tr>
            )
          )

          }
        </tbody>
        </table>

    </div>


  )
}
import {useState ,useEffect} from "react";

function App() {
  const [name ,setName] = useState("");
  const [email,setEmail] = useEmail("");
  const [department,setDepartment] = useDepartment("");
  const [age,setAge] = useAge("");
}