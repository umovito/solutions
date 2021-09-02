function solution(begin, target, words) {
    var answer = 0;
    var diff = 0;
    var now = '';
    var used = {};
    var search = [];
    
    search.push(begin);
    
    var next = [];
    var diff = 0;
    
    while (true) {
        next = [];
        if (search.length == 0) return 0;
        while (search.length > 0) {
            now = search.shift();
            diff = 0;
            if(now == target) return answer;
            else {
                for(var w=0; w<words.length; w++) {
                    diff = 0;
                    for(var n=0; n<now.length; n++) {
                        if(words[w].substring(n, n+1) != now.substring(n, n+1)) {
                            diff++;
                        }
                    }
                    if(diff == 1 && words[w] != begin && !used.hasOwnProperty(words[w])) {
                        next.push(words[w]);
                        used[words[w]] = 1;
                    }
                }
            }
        }
        search = next;
        answer++;
    }
    return answer;
}
