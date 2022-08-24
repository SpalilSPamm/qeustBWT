function isCorrectName(name) {
    if (name.length < 2 || name.length > 255) {
        return false;
    }
    return /^[a-zA-Z0-9" "]+$/.test(name);
}

function isCorrectDate(date) {
    let dateReg = /^\d{2}.\d{2}.\d{4}$/;

    return dateReg.test(date);
}

function isCorrectCountry(country) {
    return list.includes(country);
}


function isCordinnatLatCorrect(cr){
    if(cr > 0 ||  cr < 90){
        return true;
    }else{
        return false;
    }
}

function isCordinnatLatCorrect(cr){
    if(cr > 0 ||  cr < 180){
        return true;
    }else{
        return false;
    }
}