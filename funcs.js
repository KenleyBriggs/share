
// creates the customer info object
function customerInfoObject(formObject) {
    const cusInfo = {
        // jobName: formObject.jobName,
        // contractor: formObject.contractor,
        // jobAddress: formObject.jobAddress,
        // dateCompleted: formObject.dateCompleted,
        // roofSize1: formObject.roofSize1,
        // roofSize2: formObject.roofSize2,
        // roofSize3: formObject.roofSize3,
        // roofSize4: formObject.roofSize4,
        roofSize5: formObject.roofSize5,
    }
    return cusInfo
}

// processes the customer info form
function cusForm(formObject){
    const burt = customerInfoObject(formObject)
    var url = "https://docs.google.com/spreadsheets/d/1qADIYshtfuXl6TgZucGGaQDiTMs3U6K6vcLBmGGT_A0/edit#gid=0";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Data");

    ws.appendRow([burt.jobName,
                  burt.contractor,
                  burt.jobAddress,
                  burt.dateCompleted,
                  burt.roofSize1,
                  burt.roofSize2,
                  burt.roofSize3,
                  burt.roofSize4,
                  burt.roofSize5]) 
}

// loads the customerinfo html
function loadCustomerInfo() {

    return render('customerinfo');
}

//loads the roofoneinfo html
function loadRoofInfo() {
    // pulls dropdown data from google sheets
    var ss = SpreadsheetApp.openByUrl(url)
    var ws = ss.getSheetByName('rooftypes')
    var rTList = ws.getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(),1).getValues();
    var htmlList = rTList.map(function(r) {return '<option>' + r[0] + '</option>'}).join('')
    // provides dropdown data to html
    var tmp = HtmlService.createTemplateFromFile('roofoneinfo')
    tmp.rTList = htmlList

    return tmp.evaluate()
}

