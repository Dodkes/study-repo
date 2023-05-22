export default function ProcessGuide (props) {

function toggleSteplist(e) {
  e.target.nextElementSibling.style.display = 'block'
}

    return props.data.map((process) => {
      return (<div key={Math.random()}>
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
        </li>
    )
  })
}