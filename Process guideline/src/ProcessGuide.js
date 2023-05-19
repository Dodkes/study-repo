
export default function ProcessGuide (props) {
    return props.data.map((process) => {
      return (<div key={Math.random()}>
        <li id='process-name'>{process.processName}</li>
        <div id='process-content'>
          {/* <Steplist data={process.steps} /> */}
          <Steplist steps={process} />
        </div>
        
      </div>)
    })
}

function Steplist (props) {
  return props.steps.steps.map((steps) => {
    return (
        <li id="highlight" key={Math.random()}>{steps.step}<span id="description">{steps.description}</span></li>
    )
  })
}