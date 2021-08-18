function solution(brown, yellow) {
    var answer = [];
    
    var i = 3;
    var sum = brown + yellow;
    
    while(i*i <= sum) {
        if(sum % i == 0) {
            if (yellow == (sum/i - 2) * (i - 2)) {
                answer = [sum/i, i];
                break;
            }
        }
        i += 1;
    }
    
    return answer;
}
