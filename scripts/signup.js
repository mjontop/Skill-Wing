function matchPassword() {
    
    if ( document.getElementById('pword1').value != document.getElementById('pword').value ){
        document.getElementById('pword').style.borderBottom = '3px solid red';
    }

    if ( document.getElementById('pword').value == "" ){
        document.getElementById('pword').style.borderBottom = ' 3px solid blue';   
    }
    if (document.getElementById("pword").value == document.getElementById("pword1").value ){
        document.getElementById('pword').style.borderBottom = ' 3px solid blue';
        document.getElementById('button').disabled = false;
    }
}
