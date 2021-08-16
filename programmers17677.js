function solution(str1, str2) {
    str1 = str1.toUpperCase().match(/[A-Z]+/g);
    str2 = str2.toUpperCase().match(/[A-Z]+/g);
    if(str1 == null) str1 = [];
    if(str2 == null) str2 = [];
    var set1 = [];
    var set2 = [];
    var union = {};
    var intersection = {};
    
    for(var i=0; i<str1.length; i++) {
        for(var j=0; j<str1[i].length-1; j++) {
            if(str1[i].substring(j, j+2).length < 2) break;
            if(str1[i].substring(j, j+2) in set1) {
                set1[str1[i].substring(j, j+2)] += 1;
            }
            else {
                set1[str1[i].substring(j, j+2)] = 1;
            }
        }
    }
    
    for(var i=0; i<str2.length; i++) {
        for(var j=0; j<str2[i].length-1; j++) {
            if(str2[i].substring(j, j+2).length < 2) break;
            if(str2[i].substring(j, j+2) in set2) {
                set2[str2[i].substring(j, j+2)] += 1;
            }
            else {
                set2[str2[i].substring(j, j+2)] = 1;
            }
        }
    }
    
    if(Object.keys(set1).length > 0) {
        for(var k1 in set1) {
            union[k1] = set1[k1];
            for(var k2 in set2) {
                if(union.hasOwnProperty(k2)) {
                    union[k2] = set1[k2] > set2[k2] ? set1[k2] : set2[k2];
                }
                else {
                    union[k2] = set2[k2];
                }
                if(k1 == k2) {
                    intersection[k2] = set1[k2] < set2[k2] ? set1[k2] : set2[k2];
                }
            }
        }
    }
    else {
        union = set2;
    }
    
    var cnt1 = 0;
    var cnt2 = 0;
    
    for(k1 in union) {
        cnt1 += union[k1];
    }
    for(k1 in intersection) {
        cnt2 += intersection[k1];
    }
    
    return cnt1 + cnt2 == 0 ? 65536 : Math.floor(cnt2 / cnt1 * 65536);
}
