import Greeting from './components/Greeting'
function App() {

  
  let allStudents = [
    {
      studentName: "Ali",
      grade: 100,
      city:"Manama"
    },
    {
      studentName: "Ebrahim",
      grade: 99,
      city:"Muharraq"
    },
    {
      studentName: "Mohammad",
      grade: 100,
      city:"Manama"
    },
  ]


  return (
    <>
      <h1>App Page</h1>

      {allStudents.map((oneStudent)=>
      <div>
        <Greeting studentName={oneStudent.studentName}/>
      </div>
      )}
    </>
  )
}

export default App
