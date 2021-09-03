function solution(n, k) {
    var answer = [];
    var nums = [];
    var m = 1;
    
    for(var i=1; i<=n; i++) {
        nums.push(i);
    }
    while(nums.length > 0) {
        m = 1;
        for(var i=1; i<=n-1; i++) {
            m *= i;
        }
        answer.push(nums.splice(Math.ceil(k / m) - 1, 1)[0]);
        k = k % m;
        n -= 1;
    }
    
    
    return answer;
}
