const networkProcess = [{
    processName: 'Site Down',
    steps: [{
        step: '1) ROUTERS',
        description: ' - Create ticket & open outage for all affected routers'
    },
    {
        step: '2) HOSTS',
        description: ' - Link to network ticket >> Open outage >> Send to DC-S'
    },
    {
        step: '3) DOMAIN CONTROLLERS',
        description: ' - Link to network ticket >> Open outage >> Handle as per KB0020422'
    },
    {
        step: '4) POWER OUTAGE MAIL',
        description: ' - Send mail to locals + 1TOC + DCS zzITINFDCServicesSC@boehringer-ingelheim.com + BICORE SL zzitinfnwsbicoreshiftleads@boehringer-ingelheim.com + LIM of the affected site https://boehringer.sharepoint.com/sites/z365itinf/Lists/Demand%20%20Country/AllItems.aspx'
    },
    {
        step: '5) TEAMS SPOC',
        description: ' - Open teams communication & involve BICORE, DC-S, 1TOC, LIM. Inform them about the issue, provide INC number & status info (e. g. waiting for local response). Wait 15 min. for locals feedback.'
    },
    {
        step: '6) POWER OUTAGE',
        description: ' - if there is power outage confirmed, send ticket to BICORE with such information'
    },
    {
        step: '7) NO POWER OUTAGE',
        description: ' - in case of no response/no power outage confirmation, open ticket with provider & follow escalation process. Provide this information via teams spoc. For email to provider, also add BICORE SL zzitinfnwsbicoreshiftleads@boehringer-ingelheim.com + LIM of the affected site https://boehringer.sharepoint.com/sites/z365itinf/Lists/Demand%20%20Country/AllItems.aspx'
    }
]

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