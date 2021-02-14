
document.getElementById('output').style.visibility = 'hidden'; 

let convert = document.getElementById('converted');

convert.addEventListener('input', function(e){

    document.getElementById('output').style.visibility = 'visible'; 


    let lbs = e.target.value ;


    let gramOutput = document.getElementById('gramsoutput');
    gramOutput.innerHTML = lbs / 0.0022046 ; 

    let kgOutput = document.getElementById('kilogramsoutput');
    kgOutput.innerHTML = lbs / 2.2046 ; 

    let ouncOutput = document.getElementById('ouncesoutput');
    ouncOutput.innerHTML = lbs * 16 ; 

} );



   


