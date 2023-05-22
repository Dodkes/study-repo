import { useState } from 'react'
import './App.css'
import Role from './Role'
import { networkProcess, teamsProcess, tsysnowProcess, otherProcess } from './data'
import ProcessGuide from './ProcessGuide'

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
        case 'queue' : setData(otherProcess)
          break
        default:
    }
  }

  return (
    <>
      <h1 className='main-heading'>1TOC Process guideline</h1>
      <Role id={'network'} getRoleData={getRoleData}/>
      <Role id={'tsysnow'} getRoleData={getRoleData}/>
      <Role id={'teams'} getRoleData={getRoleData}/>
      <Role id={'queue'} getRoleData={getRoleData}/>
      <ProcessGuide getRoleData={getRoleData} data={data}/>
    </>
  )
}

export default App;