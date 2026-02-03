function Greeting(props){
    // props is ALWAYS an object
    console.log(props.studentName)

    // destructuring props
    // const studentName = props.studentName
    // const course = props.course
    const {studentName, course} = props
    return(
        <div>
            <h1>Hello Good Morning {studentName}</h1>
        </div>
    )
}

export default Greeting