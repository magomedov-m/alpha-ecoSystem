import HomePage from '../src/Pages/HomePage'
import Detail from '../src/Pages/Detail'
import NotFound from '../src/Pages/NotFound'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Route path='/'>
        <HomePage />
      </Route>
      <Route path='/country/:name' Component={Detail} />
      <Route Component={NotFound} />
    </>
  )
}

export default App
