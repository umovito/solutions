function solution(enter, leave) {
    var answer = [];
    var room = {};
    var e = 0;
    var l = 0;
    
    for(var i=0; i<enter.length; i++) {
        answer.push(0);
    }
    
    while(l < leave.length) {
        if(!room.hasOwnProperty(leave[l])) {
            room[enter[e]] = 0;
            e++;
        } else {
            Object.keys(room).forEach((key, index) => {
                if(key == leave[l]) {
                    answer[Number(leave[l]) - 1] += Number(room[key]);
                } else {
                    answer[Number(leave[l]) - 1] += 1;
                    room[key] += 1;
                }
            });
            delete room[leave[l]];
            l++;
        }
    }
    
    return answer;
}
