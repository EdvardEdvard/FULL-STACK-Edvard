  //header: kurssin nimi
  const Header = (props) => {
    return (
      <div>
        <p>
          <h1>{props.nimi}</h1>
        </p>
      </div>
    )
  }


  
  //content osat ja tehtävämäärä
  const Content = (props) => {
    return (
    <>
      <SubPart teksti={props.teksti1} nro={props.nro1}/>
      <SubPart teksti={props.teksti2} nro={props.nro2}/>
      <SubPart teksti={props.teksti3} nro={props.nro3}/>
    </>
    )
  }

  //total tehtävien yhteismäärä
  const Total = (props) => {
    return (
      <div>
        <p>
          Number of exercises {props.yhteensa}
        </p>
      </div>   
    )
  }

  //total tehtävien yhteismäärä
  const SubPart = (props) => {
    return (
      <div>
        <p>
          {props.teksti} {props.nro}
        </p>
      </div>   
    )
  }  
 
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  

  return (
    <div>
      <Header nimi={course} />
      <Content teksti1={part1.name} teksti2={part2.name} teksti3={part3.name} nro1={part1.exercises} nro2={part2.exercises} nro3={part3.exercises}/>
      <Total yhteensa={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App