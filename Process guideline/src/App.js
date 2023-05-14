import { useState } from 'react';
import './App.css';
import Role from './Role';

function App() {

const [data, setData] = useState('')

  const getRoleData = (data) => {
    switch (data) {
      case 'network' : setData('Network')
        break
      case 'teams' : setData('Teams')
        break
        case 'tsysnow' : setData('tsysnow')
        break
        case 'other' : setData('other')
          break
        default:
    }
  }

  return (
    <>
    <h1 className='main-heading'>1TOC Process guideline</h1>
    <Role roleName={'Network'} id={'network'} getRoleData={getRoleData}/>
    <Role roleName={'TSY SNOW'} id={'tsysnow'} getRoleData={getRoleData}/>
    <Role roleName={'Teams'} id={'teams'} getRoleData={getRoleData}/>
    <Role roleName={'Other'} id={'other'} getRoleData={getRoleData}/>
    <Guide getRoleData={getRoleData} data={data}/>
    </>
  )
}

function Guide (props) {
    return <div id='guide-container'>{props.data}</div>
}

export default App;
