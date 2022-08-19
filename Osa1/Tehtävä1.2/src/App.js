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
 


const App = () => { //Kaikki data apissa
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header nimi={course} />
      <Content teksti1={part1} teksti2={part2} teksti3={part3} nro1={exercises1} nro2={exercises2} nro3={exercises3}/>
      <Total yhteensa={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App