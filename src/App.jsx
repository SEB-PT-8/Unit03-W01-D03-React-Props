import Greeting from './components/Greeting'
import Weather from './components/Weather'
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


  
  /* 
  Exercise 1:
  1. Create a simple Weather component that displays the day and tempreture
  2. map through the array weatherData below and render the Weather component for each element we have in the array
  3. Pass down the values for each day as a prop and display them in the component
   */
  const weatherData = [
    {
      day: "Saturday",
      tempreture: 21
    },
    {
      day: "Sunday",
      tempreture: 19
    },  
    {
      day: "Monday",
      tempreture: 20
    },  
    {
      day: "Tuesday",
      tempreture: 10
    },  
    {
      day: "Wednesday",
      tempreture: 24
    },
  ]


  return (
    <>
      <h1>App Page</h1>

      {allStudents.map((oneStudent)=>
        <div key={oneStudent.studentName}>
          <Greeting studentName={oneStudent.studentName} grade={oneStudent.grade}/>
        </div>
        
      )}


      {weatherData.map((oneDay)=>
      
      <Weather day={oneDay.day} tempreture={oneDay.tempreture} key={oneDay.day}/>
      )}
    </>
  )
}

export default App
