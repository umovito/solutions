function solution(priorities, location) {
    var answer = 0;
    var locationList = [];
    var pri = priorities;
    var prioritySort = [];
    var dequeue, currentLocation;
    
    for(var i=0; i<priorities.length; i++) {
        prioritySort.push(priorities[i]);
        locationList.push(i);
    }
    
    prioritySort.sort().reverse();
    
    while(pri.length > 0) {
        dequeue = pri.shift();
        currentLocation = locationList.shift();

        if(dequeue < prioritySort[0]) {
            pri.push(dequeue);
            locationList.push(currentLocation);
        }

        else {
            answer += 1;
            prioritySort.shift();
            if(currentLocation == location) break;
        }
    }
    
    return answer;
}
