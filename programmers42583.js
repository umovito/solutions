function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var passed = []; //다리를 지난 트럭
    var passing = []; //다리를 건너는 트럭
    var truckCnt = truck_weights.length;
    var firstTruck = 0;
    var waitingTruck = 0;
    var onBridgeCnt = 0;
    var onBridgeWeight = 0;
    
    for(var i=0; i<bridge_length; i++) {
        passing[i] = 0;
    }
    
    while(passed.length < truckCnt) {
        answer += 1;
    //1. 다리 위에 있는 트럭들을 한칸씩 움직이고,
        firstTruck = passing.shift();
        passing[bridge_length - 1] = 0;
    //   맨 끝에 있는 트럭은 다리를 지난 트럭으로 위치
        if(firstTruck != 0) {
            passed.push(firstTruck);
            onBridgeCnt -= 1;
            onBridgeWeight -= firstTruck;
        }
    
    //2. length(다리 위에 있는 트럭) < bridge_length이고,
        if(onBridgeCnt < bridge_length && 
    //   sum(다리 위에 있는 트럭의 무게) + 대기 0번 트럭 무게 < weight 일 경우
           onBridgeWeight + truck_weights[0] <= weight) {
    //   대기 0번 트럭을 다리 맨 끝에 위치
            waitingTruck = truck_weights.shift();
            passing[bridge_length-1] = waitingTruck;
            onBridgeCnt += 1;
            onBridgeWeight += waitingTruck;
        }
    }
    return answer;
}
