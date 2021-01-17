import styled from 'styled-components'
import 'tailwindcss/tailwind.css'

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`

export const Home = (): JSX.Element => (
  <Container>
    <h1 className="m-1">Test</h1>
  </Container>
)

export default Home
