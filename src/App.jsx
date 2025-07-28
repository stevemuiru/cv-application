import {Information} from './information';
import {Education} from './Education';
import {Experience} from './Experience'

export default function App() {
  return (
    <div className="app">
        <h1>Cv Builder</h1>
        <Information />
        <Education />
        <Experience />
    </div>
  )
}