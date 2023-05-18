const networkProcess = [{
    processName: 'Site Down',
    steps: ['step1', 'step2']
},
{
    processName: 'SDWAN API',
    steps: ['1step']
}]

const teamsProcess = [{
    processName: 'Business Critical Hotline',
    steps: []
},
{
    processName: 'SAP outage',
    steps: []
}]

const tsysnowProcess = [{
    processName: 'FW Change',
    steps: []
}]

const otherProcess = [{
    processName: 'Host outage',
    steps: []
},
{
    processName: 'LIMES user unlock',
    steps: []
}
]

export { networkProcess, teamsProcess, tsysnowProcess, otherProcess }