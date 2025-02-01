function isLeapYear(year) {
    //Logic
    if (year % 4 == 0) {
        if (year % 100 != 0 || year % 400 == 0) {
            return true;
        }
    }
    return false;
}

//Example
console.log(isLeapyear(2000));
console.log(isLeapYear(2100));