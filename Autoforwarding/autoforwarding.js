//Resolve incident
gsftSubmit(null, g_form.getFormElement(), 'bi_resolve_incident');

//Update button hit
document.querySelector("#sysverb_update").click()

//Post button hit
document.querySelector("#\\39 91f88d20a00064127420bc37824d385 > div:nth-child(2) > div > div.custom-form-group.is-wide.activity-form-group.form-group.ng-scope > table > tbody > tr > td > div.ng-scope > div > div > div > div:nth-child(1) > div > div > div.sn-controls.row > div > div.pull-right > button").click()

//Worknotes element - add comment
document.querySelector("#activity-stream-textarea").value = new Date()



//How to triger event via JS
var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});

document.querySelector("#activity-stream-textarea").dispatchEvent(clickEvent);