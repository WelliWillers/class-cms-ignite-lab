import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERT = gql`
  query {
    lessons { 
      id
      title
    }
  }
`

function App() {

  const { data } = useQuery(GET_LESSONS_QUERT)

  console.log(data)

  return (
    <h1>Olha só</h1>
  )
}

export default App
