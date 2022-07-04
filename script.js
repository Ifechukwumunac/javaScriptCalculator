const sbDsplyCntnr = document.getElementById('subDisplayContainer');

let  shldwltnthrsgnprtr = true;

// line 3 evaluate to true so we can input decimals but if
// we have it being input once the only way for it to be inputed the second time is if an operator has
//  being clicked especially 
// or if we call the clr() or the clclt() functions
// and if after calling the bckspc() function we dont have any decimals-
// mind you if we did have decimals but then there is an oerator ... CHECK MY NOTES THERE --
//  we've accounted for that already.
// what of case of 0.0.8.9 ✅

function clr(){
    sbDsplyCntnr.innerHTML = '';
    shldwltnthrsgnprtr == true;
}
function dsplyNmbr(i){
    sbDsplyCntnr.innerHTML = sbDsplyCntnr.innerHTML + i;
}
function dsplyPrtr(m){
    // if we have an empty caldisplay screen but give eception for '-' ✅
    if (sbDsplyCntnr.innerHTML == '' && m != '-') {
        return
    } else {
        // what of case of 9 ++ whatever i.e same prtr twice ✅
        if (sbDsplyCntnr.innerHTML.endsWith(m)) {
            return
            // what about 9*/ whatever i.e if it already endsWith an prtr and m = * or
            // m = / it should do nothing too ✅
            // remember the || checks for the first truthy value and && checks for first falsy value
            // if none found its true 
        } else if ((sbDsplyCntnr.innerHTML.endsWith('+') || sbDsplyCntnr.innerHTML.endsWith('-')
        || sbDsplyCntnr.innerHTML.endsWith('/') || sbDsplyCntnr.innerHTML.endsWith('*'))
         && (m == '*' || m == '/')) {
            return
        } else {
            sbDsplyCntnr.innerHTML = sbDsplyCntnr.innerHTML + m;
            shldwltnthrsgnprtr = true;
        }
    }
}
function bckspc(){
    sbDsplyCntnr.innerHTML = sbDsplyCntnr.innerHTML.slice(0,-1);

    // getting index of operator to the farthest right aka the last operator.
    let mx = Math.max(sbDsplyCntnr.innerHTML.lastIndexOf('+'), sbDsplyCntnr.innerHTML.lastIndexOf('-'), 
    sbDsplyCntnr.innerHTML.lastIndexOf('/'), sbDsplyCntnr.innerHTML.lastIndexOf('*'));

    // if the calcdisplay already has a dcml or
    //  from the last operator it includes a decimal we cant add a decimal. ✅
    // ----------> it checks for the last operators index first of 
    // if none found mx = -1 and then the substring method evaluates start or end less than zero
    // as zero and substring starting from 0 is the same as  the full string so the condition 
    // looks more like "sbDsplyCntnr.innerHTML.includes('.')"
    if ( sbDsplyCntnr.innerHTML.substring(mx).includes('.')) {
        return
    }else {
        shldwltnthrsgnprtr = true; 
    }
}
function dsplyDcml(){
    if ( shldwltnthrsgnprtr == true) {
        sbDsplyCntnr.innerHTML = sbDsplyCntnr.innerHTML + '.';
        shldwltnthrsgnprtr = false;
    }
}

function clclt(){
    // eval() has security risk attached
    // but since its a basic calculator and i control the input set-
    //  so you cant really change any code here +
    // even if you do it'll only affect your end of things.
    sbDsplyCntnr.innerHTML = eval(sbDsplyCntnr.innerHTML);
    shldwltnthrsgnprtr == true;
}