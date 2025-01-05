const repeatString = function(userInput, userNum) {
    if (userNum < 0) return "ERROR";
    let string = "";
    for(i = 0; i < userNum; ++i){
        string += userInput;
    }
    return string;

};

// Do not edit below this line
module.exports = repeatString;
