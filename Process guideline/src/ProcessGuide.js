export default function ProcessGuide (props) {

function toggleSteplist(e) {
let activeProcess
if (e.target.style.backgroundColor === 'rgb(30, 153, 81)') {
    activeProcess = e.target
}

let processContainerArray = document.querySelectorAll('.process-container')
processContainerArray.forEach((element) => {
  element.children[0].style.backgroundColor = 'rgb(255, 255, 255)'
  element.children[1].style.display = 'none'
}
)


e.target.style.backgroundColor = 'rgb(30, 153, 81)'
e.target.nextElementSibling.style.display = 'block'

if (activeProcess) {
  activeProcess.nextElementSibling.style.display = 'none'
  activeProcess.style.backgroundColor = 'rgb(255, 255, 255)'
}
}

    return props.data.map((process) => {
      return (<div className='process-container' key={Math.random()}>
        <li onClick={toggleSteplist} id='process-name'>{process.processName}</li>
        <div id='process-content'>
          <Steplist steps={process} />
        </div>
      </div>)
    })
}

function Steplist (props) {
  return props.steps.steps.map((steps) => {
    return (
        <li id="highlight" key={Math.random()}>
          <input type="checkbox" id="step-checkbox"></input>
          {steps.step}
          <span id="description">{steps.description}</span>
          <HintButtton img={steps.image}/>
        </li>
    )
  })
}


function HintButtton (props) {
  if (props.img) {
    return <button id={props.img} className='hint-button' onClick={()=> console.log(props.img)}>Example</button>
  }
}