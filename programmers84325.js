function solution(table, languages, preference) {
    var answer = '';
    var spl = [];
    var o = {};
    var sum = 0;
    var tmp = 0;
    for(var i=0; i<table.length; i++) {
        spl = table[i].split(' ');
        o[spl[0]] = {};
        for(var j=1; j<spl.length; j++) {
            o[spl[0]][spl[j]] = spl.length - j;
        }
    }
    for(var x in o) {
        tmp = 0;
        for(var i=0; i<languages.length; i++) {
            if(o[x].hasOwnProperty(languages[i])) {
                tmp += preference[i] * o[x][languages[i]];
            }
        }
        if (tmp > sum) {
            sum = tmp;
            answer = x;
        } else if (tmp == sum) {
            if (answer > x) {
                answer = x;
            }
        }
    }
    return answer;
}
