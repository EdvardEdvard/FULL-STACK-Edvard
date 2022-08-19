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
      <div>
        <p>
          {props.teksti1} {props.paljonkoFund}
        </p>
        <p>
          {props.teksti2} {props.paljonkoPr}
        </p>
        <p>
          {props.teksti3} {props.paljonkoKom}
        </p>
      </div>   
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
      <Content teksti1={part1} teksti2={part2} teksti3={part3} paljonkoFun={exercises1} paljonkoPr={exercises2} paljonkoKom={exercises3}/>
      <Total yhteensa={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App