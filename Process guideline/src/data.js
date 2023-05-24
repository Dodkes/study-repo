const networkProcess = [{
    processName: 'Site Down',
    steps: [{
        step: '0) MM Check',
        description: ' - Check if there is any ongoing MM on site. Check in tasks, changes, mails'
    },
    {
        step: '1) ROUTERS',
        description: ' - Create ticket & open outage for all affected routers',
        image: 'network-outage.jpg'
    },
    {
        step: '2) HOSTS',
        description: ' - Link to network ticket >> Open outage >> Send to DC-S',
        image: 'host-handling.jpg'
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
        description: ' - If there is power outage confirmed, send ticket to BICORE with such information',
        image: 'Image Source 2'
    },
    {
        step: '7) NO POWER OUTAGE',
        description: ' - In case of no response/no power outage confirmation, open ticket with provider & follow escalation process. Provide this information to teams spoc. For email to provider, also add BICORE SL zzitinfnwsbicoreshiftleads@boehringer-ingelheim.com + LIM of the affected site https://boehringer.sharepoint.com/sites/z365itinf/Lists/Demand%20%20Country/AllItems.aspx'
    }
]
}]

const teamsProcess = [{
    processName: 'KONICA report',
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
        description: ' - To zzitgaekonica-support@boehringer-ingelheim.com with issue description. Konica support will create a case for the issue [MOST IMPORTANT]',
        image:  'konica-mail.jpg'
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
    steps: [{
        step: '1) FW DCS/FCI CHECK',
        description: ' - Validate DCS/FCI FW rule via mail or teams markus.schutz@boehringer-ingelheim.com & soeren.kuettner@boehringer-ingelheim.com',
        image: 'fw-validate.jpg'
    },
    {
        step: '2) IF FCI VALIDATED',
        description: ' - Assign on Marian Marcak & inform him about that. In case Marian is unavailable, assign on Pavol Giertl. You are done here, no more steps required'
    },
    {
        step: '3) IF DCS VALIDATED',
        description: ' - Create FW change in compass & wait for the change number'
    },
    {
        step: '4) REQUEST CHANGE ID',
        description: ' - Once change number in compass is received, contact miroslav.jurasek@t-systems.com, send him the change number and request the change ID for mentioned change',
        image: 'change-id.jpg'
    },
    {
        step: '5) CLOSE TASK',
        description: ' - Once Miroslav sends the change ID. Close the task with that ID'
    }
]
},
{
    processName: 'SNOW Change',
    steps: []
}
]

const otherProcess = [{
    processName: 'Server reboot approval (HC & category A)',
    steps: [{
        step: '1) APPROVAL MAIL',
        description: ' - Send mail to SL + delegates + 1TOC to cc. Inform about the issue and request timeframe for reboot',
        image: 'approval-mail.jpg'
    },
    {
        step: '2) FORWARD INC TO AG',
        description: ' - Attach mail to ticket & send ticket to admin group with the same message as texted in mail & wait for response/approval'
    },
    {
        step: '3) RESPONSE',
        description: ' - After approval proceed to reboot. In case of received time frame for reboot, put ticket on hold and send reminder via outlook to 1TOC people on that shift'
    }
]
},
{
    processName: 'Host down',
    steps: [{
        step: '0) MM CHECK',
        description: ' - Check if the host is in MM in OBM repository'
    },
    {
        step: '1) CREATE OUTAGE',
        description: ' - Use OBM "time created" column for outage start time'
    },
    {
        step: '2) IF NO NETWORK ISSUE',
        description: ' - Start host >> check if VMs are running >> close outage >> close INC'
    },
    {
        step: '3) IF NETWORK ISSUE RELATED',
        description: ' - Link to network ticket >> open outage >> send to DC-S'
    }
]
},
{
    processName: 'LIMES user unlock',
    steps: []
}
]

export { networkProcess, teamsProcess, tsysnowProcess, otherProcess }