//
// Function: Calculate Page Parameters
// 
// 
function calc_page_param(NCPSApageNO, NCPSAperPAGE, NCPSAcount) {
    
    // get total record
    var total = NCPSAcount;
    var per_page = NCPSAperPAGE;
    var page = NCPSApageNO;
    
    // check per_page value
    if(per_page < 1){
        per_page = 1;
    }
    if(total < per_page) {
        per_page = total;
    }
    
    // check page value
    if(parseInt(total/per_page) < page) {
        page = parseInt(total/per_page);
    }
    if(page < 1) {
        page = 1;
    }

    // calc result(INDEX) value    
    var result = (per_page * (page - 1)) + 1;
    if (result > total) {
        result = total;
    }
    
    // debug
    console.log("Page:"+page+" PerPage:"+per_page+" INDEX:"+result+" Total:"+total);
    
    // return :: for Jasmine (https://github.com/jasmine/jasmine)
    return page+":"+per_page+":"+result+":"+total;
}
