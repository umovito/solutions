function solution(N, number) {
    var tmp = new Set([]);
    var s = '';
    var d = [];
    var phase = 0;
    
    d[phase] = tmp;
    
    while(phase < 8) {
        phase += 1;
        s = '';
        tmp = new Set([]);
        for(var i=0; i<phase; i++) {
            s += N;
        }
        tmp.add(Number(s));
        for(var n=1; n<phase; n++) {
            d[n].forEach(function(di) {
               d[phase-n].forEach(function(dj) {
                   tmp.add(Number(di) + Number(dj));
                   tmp.add(Number(di) - Number(dj));
                   tmp.add(Number(di) * Number(dj));
                   if(Number(dj) != 0) tmp.add(Math.floor(Number(di) / Number(dj)));
               });
            });
        }
        if(tmp.has(number)) return phase;
        d.push(tmp);
        
    }
    
    return -1;
}
