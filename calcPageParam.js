//
// Function: Calculate Page Parameters
// 
// 
function calc_page_param(NCPSApageNO, NCPSAperPAGE, NCPSAcount) {
    
    // get total record
    var total = Math.floor(NCPSAcount);
    var per_page = Math.floor(NCPSAperPAGE);
    var page = Math.floor(NCPSApageNO);
    
    // check per_page value
    if(per_page < 1){
        per_page = 1;
    }
    if(per_page > total) {
        per_page = total;
    }
    
    // check page value
    if(per_page * (page -1) > total) {
        page = Math.floor(total / per_page) +1;
    } else if (per_page * (page -1) === total) {
        page = Math.floor(total / per_page);
    }
    if(page > total) {
        page = total;
    }
    if(page < 1) {
        page = 1;
    }

    // calc result(INDEX) value    
    var result = Math.floor(per_page * (page - 1)) + 1;
    
    if (result > total) {
        result = total;
    }
    
    // debug
    console.log("Page:"+page+" PerPage:"+per_page+" INDEX:"+result+" Total:"+total);
    
    // return :: for Jasmine (https://github.com/jasmine/jasmine)
    return page+":"+per_page+":"+result+":"+total;
}
