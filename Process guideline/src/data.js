const networkProcess = [{
    processName: 'Site Down',
    steps: [{
        step: '0) MM Check',
        description: ' - Check if there is any ongoing MM on site. Check in tasks, changes, mails'
    },
    {
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
        description: ' - Open teams communication & involve BICORE, DC-S, 1TOC, LIM. Inform them about the issue, provide INC number & status info (e. g. waiting for local response). Wait 15 min. for locals feedback'
    },
    {
        step: '6) POWER OUTAGE',
        description: ' - if there is power outage confirmed, send ticket to BICORE with such information'
    },
    {
        step: '7) NO POWER OUTAGE',
        description: ' - in case of no response/no power outage confirmation, open ticket with provider & follow escalation process. Provide this information to teams spoc. For email to provider, also add BICORE SL zzitinfnwsbicoreshiftleads@boehringer-ingelheim.com + LIM of the affected site https://boehringer.sharepoint.com/sites/z365itinf/Lists/Demand%20%20Country/AllItems.aspx'
    }
]

},
{
    processName: 'SDWAN API',
    steps: ['1step']
}]

const teamsProcess = [{
    processName: 'KONICA report handling',
    steps: [{
        step: '1) INC',
        description: ' - Create ticket'
    },
    {
        step: '2) CHECK INFO',
        description: ' - GSD must provide affected printers (names), ideally also user names'
    },
    {
        step: '3) SEND MAIL',
        description: ' - to zzitgaekonica-support@boehringer-ingelheim.com with issue description. Konica support will create a case for the issue [MOST IMPORTANT]'
    },
    {
        step: '4) FORWARD INC ACCORDING THE ISSUE',
        description: ' - Software issue >> BI-ITINF-KM-MPS-SOFTWARE-ISSUE / Hardware issue >> BI-ITINF-KM-MPS-HARDWARE-ISSUE'
    }
]
},
{
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
    processName: 'Server reboot approval (HC & category A)',
    steps: [{
        step: '1) APPROVAL MAIL',
        description: ' - send mail to SL + delegates + 1TOC to cc. Inform about the issue and request timeframe for reboot'
    },
    {
        step: '2) FORWARD INC TO AG',
        description: ' - attach mail to ticket & send ticket to admin group with the same message as texted in mail'
    },
    {
        step: '3) RESPONSE',
        description: ' - after approval proceed to reboot/put ticket on hold and send reminder via outlook 1TOC people on that shift'
    }
]
},
{
    processName: 'Host outage',
    steps: []
},
{
    processName: 'LIMES user unlock',
    steps: []
}
]

export { networkProcess, teamsProcess, tsysnowProcess, otherProcess }