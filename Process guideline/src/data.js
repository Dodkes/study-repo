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
        description: ' - Create INC according the reported issue by GSD'
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
    steps: [{
        step: '0) CONFIRM BCH WITH GSD',
        description: ' - If the issue is reported as "Business Critical Hotline: yes", confirm with GSD, that issue was correctly reported via BCH to prevent mistakenly reported issue. If GSD confirmed, perform next steps'
    },
    {
        step: '1) HANDLE THE INC',
        description: ' - Open the respective runbook and handle INC as usual (follow runbook steps)'
    },
    {
        step: '2) IF ISSUE FIXED',
        description: ' - Once you performed runbook steps, check with GSD if issue persists. If not, close the INC'
    },
    {
        step: '3) IF ISSUE NOT FIXED',
        description: ' - Contact respective admin group. Perform warm handover, no matter which support category it is. If handover not possible/no response, perform xMatters'
    },
    {
        step: '4) TICKET ACCEPTED',
        description: ' - Once admin group accepted ticket, send an email to GSD >> zzITINFTeamGSDVendor@boehringer-ingelheim.com - template in KB0062752',
        image: 'gsd-template.jpg'
    },
    {
        step: '5) IF 2ND LVL REQUEST OSS',
        description: ' - 2nd level can request on site support to 1TOC. OSS is triggered by 1TOC via xMatters. See KB0030938'
    }
]
},
{
    processName: 'SAP outage',
    steps: []
}]

const tsysnowProcess = [{
    processName: 'FW Change',
    steps: [{
        step: 'A) IF VSYS RULE',
        description: ' - In case rule is VSYS, validate DCS/FCI FW rule via mail or teams with markus.schutz@boehringer-ingelheim.com & soeren.kuettner@boehringer-ingelheim.com, wait for response and continue according the validated FW type',
        image: 'fw-validate.jpg'
    },
    {
        step: 'B) IF [FCI] Boehringer',
        description: ' - If there are no aditional requirements in the task. Close the task as follows: In the task, from the "State" drop down menu, set to "Close Skipped" and close the task',
        image: 'close-fci-task.jpg'
    },
    {
        step: 'C) IF any other FCI',
        description: ' - Assign on Marian Marcak/Pavol Giertl and let him know about that'
    },
    {
        step: 'D) IF DCS',
        description: ' - Create FW change in compass & wait for the change number'
    },
    {
        step: '4) REQUEST CHANGE ID',
        description: ' - Once change number in compass is received, contact miroslav.jurasek@t-systems.com, send him the change number and request the change ID for mentioned change',
        image: 'change-id.jpg'
    },
    {
        step: '5) CLOSE TASK',
        description: ' - Once Miroslav sends the change ID, in the task, from the "State" drop down menu, set to "Close Complete" and then close it with received change ID'
    }
]
},
{
    processName: 'SAP system down',
    steps: [{
        step: '0) DETERMINE SAP PROCESS',
        description: ' - If you receive an email from TSY SAP team that some of the SAP system/s is/are down/offline, you must perform next steps',
        image: 'sap-mail.jpg'
    },
    {
        step: '1) CREATE INC',
        description: ' - Create ticket in BI SNOW, set SO to BI-PAAS-SAP-XXX, where XXX is affected SAP system. Also attach the email to created ticket',
    },
    {
        step: '2) CREATE OUTAGE',
        description: ' - Refresh impacted services & then create outage for affected SAP system',
    },
    {
        step: '3) SEND AN EMAIL',
        description: ' - Reply all to email you received, that you have created an INCXXX for that issue. Let ticket wait in queue until issue is resolved'
    },
    {
        step: '4) CLOSE INC',
        description: ' - Once you receive an email from TSY SAP team that issue is resolved, attach email to INC and close INC'
    }
]
},
{
    processName: 'Shortdump handling',
    steps: [{
        step: '1) FIND CORRECT SO ',
        description: ' - Click on "i" next to SO. Keep opening related items until you see the "AP_" tag, then open it and find correct SO via upstream relations',
        image: 'ap-so.jpg'
    },
    {
        step: '2) CHANGE TICKET INFO ',
        description: ' - Once you have the proper SO, change it in the ticket. Let CI input empty and change short description to "N shortdumps in the last 24h". Set lowest priority possible and send to AG according the SO'
    }]
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
        step: '2) IF NO NETWORK ISSUE RELATED',
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
    steps: [{
        step: '0) Business hours check',
        description: ' - Business hours are out of weekend & out of 6AM - 5 PM CET'
    },
    {
        step: '1) TPAM password reset',
        description: ' - Go to TPAM URL in VDI - https://pam/tpam/main.asp '
    },
    {
        step: '2) Login',
        description: ' - Use your VDI credentials'
    },
    {
        step: '3) Request password',
        description: ' - click on "Request" drop down menu on the top, choose "Password" & "Add Request". In "Filter" tab in Account Name input put "x2lwsupport". Go to "Accounts" tab & select the "DE-AS-LABWARE-BP-PW". In Details put INC number. Then click on "Save Changes"'
    },
    {
        step: '4) Get the password',
        description: ' - Click on "Password" tab and the password is in the square brackets [ Password ], for 10 seconds. Write it down.'
    },
    {
        step: '5) Login as LW support',
        description: ' - Go to url - https://myworkspace/Citrix/BIStore2Web/. Log out from your x2 account or go via incognito mode & login as x2lwsupport@boehringer-ingelheim.com & TPAM password.'
    },
    {
        step: '6) Login to LIMES Prod',
        description: ' - Login to LIMES Prod. Click on 2nd icon from the left and log in. Use "x2lwsupport" username & TPAM password, hit OK, then select role "R-USERADMIN"'
    },
    {
        step: '7) Unlocking the account',
        description: ' - Click on 4th icon from the left "Open the Explorer Table Manager". In the left panel, expand "Users". Find the blocked user name, select "User disabled", from True to False. Save.'
    },
    {
        step: '8) Resolving the INC',
        description: ' - Snip it to INC & forward back to affected user to check if the account is unlocked.'
    }
]
}
]

export { networkProcess, teamsProcess, tsysnowProcess, otherProcess }