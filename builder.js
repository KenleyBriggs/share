var url = 'https://docs.google.com/spreadsheets/d/1qADIYshtfuXl6TgZucGGaQDiTMs3U6K6vcLBmGGT_A0/edit#gid=0'
var Route = {}
Route.path = function(route, callback) {
    Route[route] = callback;
}

function doGet(request) {
    Route.path('customerinfo', loadCustomerInfo);
    Route.path('roofoneinfo', loadRoofInfo);

    if (Route[request.parameters.view]) {
        return Route[request.parameters.view]();
    }else {
        return render("home");
    }
}


