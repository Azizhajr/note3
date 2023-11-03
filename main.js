

function calc(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 =parseFloat(document.getElementById('n2').value);
    var n3 = parseFloat(document.getElementById("n3").value);
    document.getElementById('r').value = (n1+n2+n3*2)/4; 
}
function c(){
    var b1 = parseFloat(document.getElementById('b1').value);
    var b2 =parseFloat(document.getElementById('b2').value);
    var b3 =parseFloat(document.getElementById('b3').value);
    document.getElementById('b4').value = (b1+b2+b3*2)/4; 
}
function a(){
    var l1 = parseFloat(document.getElementById('l1').value);
    var l2 =parseFloat(document.getElementById('l2').value);
    var l3 =parseFloat(document.getElementById('l3').value);
    document.getElementById('l4').value = (l1+l2+l3*2)/4; 
}
function a3(){
    var z1 = parseFloat(document.getElementById('z1').value);
    var z2 =parseFloat(document.getElementById('z2').value);
    document.getElementById('z4').value = (z1+z2*2)/3; 
}
function a4(){
    var e1 = parseFloat(document.getElementById('e1').value);
    var e2 =parseFloat(document.getElementById('e2').value);
    var e3 =parseFloat(document.getElementById('e3').value);
    document.getElementById('e4').value = (e1+e2+e3*2)/4; 
}
function a5(){
    var r1 = parseFloat(document.getElementById('r1').value);
    var r2 =parseFloat(document.getElementById('r2').value);
    var r3 =parseFloat(document.getElementById('r3').value);
    document.getElementById('r4').value = (r1+r2+r3*2)/4; 
}
function a6(){
    var t1 = parseFloat(document.getElementById('t1').value);
    var t2 =parseFloat(document.getElementById('t2').value);
    var t3 =parseFloat(document.getElementById('t3').value);
    document.getElementById('t4').value = (t1+t2+t3*2)/4; 
}
function a7(){
    var y1 = parseFloat(document.getElementById('y1').value);
    var y2 =parseFloat(document.getElementById('y2').value);
    var y3 =parseFloat(document.getElementById('y3').value);
    document.getElementById('y4').value = (y1+y2+y3*2)/4; 
}

function a8(){
    var u1 = parseFloat(document.getElementById('u1').value);
    var u2 =parseFloat(document.getElementById('u2').value);
    var u3 =parseFloat(document.getElementById('u3').value);
    document.getElementById('u4').value = (u1+u2+u3*2)/4; 
}
function a9(){
    var i1 = parseFloat(document.getElementById('i1').value);
    var i2 =parseFloat(document.getElementById('i2').value);
    var i3 =parseFloat(document.getElementById('i3').value);
    document.getElementById('i4').value = (i1+i2+i3*2)/4; 
}
function a10(){
    var o1 = parseFloat(document.getElementById('o1').value);
    var o2 =parseFloat(document.getElementById('o2').value);
    
    document.getElementById('o4').value = (o1+o2*2)/3; 
}
function a11(){
    var p1 = parseFloat(document.getElementById('p1').value);
    document.getElementById('p').value = p1; 
}


function a12(){
    var r =parseFloat(document.getElementById('r').value); 
    var b4 =parseFloat(document.getElementById('b4').value); 
    var l4 =parseFloat(document.getElementById('l4').value); 
    var z4 =parseFloat(document.getElementById('z4').value); 
    var e4 =parseFloat(document.getElementById('e4').value); 
    var r4 =parseFloat(document.getElementById('r4').value); 
    var t4 =parseFloat(document.getElementById('t4').value); 
    var y4 =parseFloat(document.getElementById('y4').value); 
    var u4 = parseFloat(document.getElementById('u4').value ); 
    var i4 =parseFloat(document.getElementById('i4').value); 
    var o4 =parseFloat(document.getElementById('o4').value); 
     var p = parseFloat(document.getElementById('p').value ); 
    document.getElementById('x').value = (r*1+b4*2+l4*2+z4*3+e4*3+r4*3+t4*1+y4*1+u4*1.5+i4*1+o4*1+p*1)/21;
}


