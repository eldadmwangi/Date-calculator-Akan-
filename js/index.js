let birth = document.getElementById('birth');
let gender = document.getElementById('gender');
let btn = document.getElementById('btn');
let result = document.getElementById('result');
let Days = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

let names = {
    'sunday': ['kwasi', 'akosua'],
    'monday': ['kwadwo', 'adwoa'],
    'tuesday': ['kwabena', 'abenaa'],
    'wednesday': ['kwaku', 'akua'],
    'thursday': ['yaw', 'yaa'],
    'friday': ['kofi', 'afua'],
    'saturday': ['kwame', 'ama']
}
btn.addEventListener('click', function(e){
    let dateArr = birth.value.split('-');
    let gen = gender.value;
    let yy = dateArr[0];
    let mm = dateArr[1];
    let dd = dateArr[2];
    let cc = yy.substring(0, 2);
    let day = Days[((((cc/4)-2*cc-1) +((5*yy/4)) +((26*(mm + 1)/10)) + dd) % 7).toFixed(0)];
    
    if(gen == 'male'){
        result.textContent = 'your akan name is :' + ' ' + names[day][0];
    }else if(gen == 'female'){
        result.textContent = 'your akan name is :' + ' ' + names[day][1];
    }else{
        result.textContent = 'invalid date';
    }

});

// let day = Days[index]