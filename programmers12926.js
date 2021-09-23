function solution(s, n) {
    var answer = '';
    var x = 0;
    var words = s.split('');
  
    for(var i=0; i<words.length; i++) {
        if(words[i] != ' ') {
            x = n%26;
            if(words[i].charCodeAt(0) <= 90) {
                if(words[i].charCodeAt(0) + x > 90) {
                    words[i] = String.fromCharCode(65 + words[i].charCodeAt(0) + x - 90 - 1);
                } else {
                    words[i] = String.fromCharCode(words[i].charCodeAt(0) + x);
                }
            } else {
                if(words[i].charCodeAt(0) + x > 122) {
                    words[i] = String.fromCharCode(97 + words[i].charCodeAt(0) + x - 122 - 1);
                } else {
                    words[i] = String.fromCharCode(words[i].charCodeAt(0) + x);
                }
            }
        }
    }
    
    answer = words.join('');
    return answer;
}
