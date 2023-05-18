import { useState } from 'react'
import './App.css'
import Role from './Role'
import { networkProcess, teamsProcess, tsysnowProcess, otherProcess } from './data'

function App() {
const [data, setData] = useState([])

  const getRoleData = (data) => {
    switch (data) {
      case 'network' : setData(networkProcess)
        break
      case 'teams' : setData(teamsProcess)
        break
        case 'tsysnow' : setData(tsysnowProcess)
        break
        case 'other' : setData(otherProcess)
          break
        default:
    }
  }

  return (
    <>
    <h1 className='main-heading'>1TOC Process guideline</h1>
    <Role  id={'network'} getRoleData={getRoleData}/>
    <Role  id={'tsysnow'} getRoleData={getRoleData}/>
    <Role  id={'teams'} getRoleData={getRoleData}/>
    <Role  id={'other'} getRoleData={getRoleData}/>
    <ProcessGuide getRoleData={getRoleData} data={data}/>
    </>
  )
}

function ProcessGuide (props) {
    return props.data.map((process) => {
      return (<div key={Math.random()}>
        <li id='process-name'>{process.processName}</li>
        <div id='process-content'>
          <Steplist data={process.steps} />
        </div>
        
      </div>)
    })
}

function Steplist (props) {

  return props.data.map((steps) => {
    return (
    <li key={Math.random()}>{steps}</li>
    )
  })
}

export default App;