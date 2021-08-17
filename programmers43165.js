function solution(numbers, target) {
    return bfs(numbers, 0, 0, target, 0);
}

function bfs(numbers, sum, i, target, answer) {
    if(i - numbers.length == 0) {
        if(sum - target == 0) {
            return answer + 1;
        }
        return answer;
    }
    
    answer = bfs(numbers, sum + numbers[i], i+1, target, answer);
    answer = bfs(numbers, sum - numbers[i], i+1, target, answer);
    return answer;
}
