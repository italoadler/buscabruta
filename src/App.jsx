
import Autocomplete from './components/Autocomplete'

import './App.css'

function App() {


  return (
    <>
      <div className="App">
        <h1>Autocomplete</h1>
        <Autocomplete debounceTime={300} />
      </div>
   </>
  )
}

export default App
