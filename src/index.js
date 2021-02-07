module.exports = function check(str, bracketsConfig) {

    let arr = [];
    let t = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] == bracketsConfig[j][0] && (bracketsConfig[j][0] != bracketsConfig[j][1])) {
                arr[t] = str[i];
                t++;
                break;
            } else if (str[i] == bracketsConfig[j][0] && (bracketsConfig[j][0] == bracketsConfig[j][1])) {
                let count = 0;
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k] == str[i]) {
                        count++;
                    }
                }
                if (count == 0) {
                    arr[t] = str[i];
                    t++;
                    break;
                } else if (arr[t - 1] == str[i]) {
                    arr[t - 1] = 'X';
                    t--;
                    break;
                } else {
                    return false;
                }
            }
            if (str[i] == bracketsConfig[j][1] && (bracketsConfig[j][0] != bracketsConfig[j][1])) {
                if (arr[t - 1] != bracketsConfig[j][0]) {
                    return false;
                }
                arr[t - 1] = 'X';
                t--;
                break;
            }
        }
    }
    if (t != 0) {
        return false;
    }
    return true;

};


