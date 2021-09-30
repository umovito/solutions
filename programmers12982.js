function solution(d, budget) {
    var answer = 0;
    var sum = 0;
    d.sort(function(a, b) { return a - b; });
    while(budget > sum && answer < d.length) {
        sum += d[answer++];
    }
    if(budget < sum) return answer-1;
    else return answer;
}
