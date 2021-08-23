function solution(n) {
    var answer = 0;
    var d = [];
    d[0] = 0;
    d[1] = 1;
    d[2] = 2;
    
    for(var i=3; i<=n; i++) {
        d[i] = (d[i-1] + d[i-2]) % 1000000007;
    }
    
    return d[n];
}
