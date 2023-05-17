//Resolve incident
gsftSubmit(null, g_form.getFormElement(), 'bi_resolve_incident');

//Update button hit
document.querySelector("#sysverb_update").click()

//Post button hit
document.querySelector("#\\39 91f88d20a00064127420bc37824d385 > div:nth-child(2) > div > div.custom-form-group.is-wide.activity-form-group.form-group.ng-scope > table > tbody > tr > td > div.ng-scope > div > div > div > div:nth-child(1) > div > div > div.sn-controls.row > div > div.pull-right > button").click()

//Worknotes element - add comment
document.querySelector("#activity-stream-textarea").value = new Date()

document.querySelector("#incident\\.close_notes").textContent = 'Test finished'


//How to triger event via JS
var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});

document.querySelector("#activity-stream-textarea").dispatchEvent(clickEvent);

//Resolution info click
document.querySelector("#tabs2_section > span:nth-child(3) > span.tabs2_tab.default-focus-outline").click()

//Select solved permanently option in resolution info

document.querySelector("#incident\\.close_code").options[2].selected = 'select'

//Ticket resolution sequence
document.querySelector("#activity-stream-textarea").value = new Date()

document.querySelector("#tabs2_section > span:nth-child(3) > span.tabs2_tab.default-focus-outline").click()

setTimeout(()=> {
    document.querySelector("#incident\\.close_notes").textContent = 'Test finished'
    document.querySelector("#incident\\.close_code").options[2].selected = 'select'
}, 1000)

setTimeout(() => {
    gsftSubmit(null, g_form.getFormElement(), 'bi_resolve_incident');
}, 2000);


//ACCESS TO INCIDENTS
let incidents = getIncidentQueueDirectory()

function getIncidentQueueDirectory() {
    let a = document.querySelector("body > macroponent-f51912f4c700201072b211d4d8c26010").shadowRoot.querySelector("div > sn-canvas-appshell-root > sn-canvas-appshell-layout")
    let b = a.children[0].children[1].contentWindow.document
    let c = b.querySelector('.list_wrap_n_scroll')
    let d = c.querySelector("#incident_table > tbody").children
    return d
}

incidents[0].children[2].children[0].click()