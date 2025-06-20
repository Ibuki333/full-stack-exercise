const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  const items = props.items
  return(
    <div>
      {
        items.map((item) => (
          <Part key={item.part} part={item.part} exercises={item.exercises} />
        ))
      }
    </div>
  )
}

const Total = (props) => {
  const items = props.items
  const total = items.reduce((sum, item) => sum + item.exercises, 0)
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const part_lst = [
    { part: part1, exercises: exercises1 },
    { part: part2, exercises: exercises2 },
    { part: part3, exercises: exercises3 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content items={part_lst} />
      <Total items={part_lst} />
    </div>
  )
}

export default App