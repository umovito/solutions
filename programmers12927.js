function solution(n, works) {
    var answer = 0;
    var wi = 0;
    
    works.sort(function(a, b) {
        return b - a;
    });
    
    while (true) {
        for(var j=wi; j<works.length; j++) {
            if(j == works.length-1) {
                wi = j;
                break;
            } else if(works[j] != works[j+1]) {
                wi = j;
                break;
            } 
        }
        
        for(var j=0; j<=wi; j++) {
            if(n > 0 && works[j] > 0) {
                works[j] -= 1;
                n -= 1;
            }
            if(n == 0 || works[works.length-1] == 0) break;
        }
        
        if(n == 0 || works[works.length-1] == 0) break;
    }
    
    for(var i=0; i<works.length; i++) {
        answer += works[i] * works[i];
    }
    
    return answer;
}
