/**
 * Created by S2_D on 21/05/2017.
 */


var doit = true
function showm(ob,pict) {
    if(doit) {
        document.getElementById(ob).style.height = '125'
        document.getElementById(pict).src = 'arrowl.gif'
        doit = false
    }
    else {
        document.getElementById(ob).style.height = '20'
        document.getElementById(pict).src = 'arrowd.gif'
        doit = true
    }
}
