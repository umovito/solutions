function solution(numbers, hand) {
    var answer = '';
    var map = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
    var left = 10;
    var right = 12;
    var current = 0;
    var leftrowdiff = 0;
    var leftcoldiff = 0;
    var rightrowdiff = 0;
    var rightcoldiff = 0;
    
    for(var i=0; i<numbers.length; i++) {
        if (numbers[i] == 0) {
            current = 11;
        } else {
            current = numbers[i];
        }
        switch(current) {
            case 1:
            case 4:
            case 7:
                left = current;
                answer += 'L';
                break;
            case 3:
            case 6:
            case 9:
                right = current;
                answer += 'R';
                break;
            default:
                leftrowdiff = Math.abs(Math.ceil(left/3) - Math.ceil(current/3));
                leftcoldiff = Math.abs((left%3 == 0 ? 3 : left%3) - (current%3 == 0 ? 3 : current%3));
                rightrowdiff = Math.abs(Math.ceil(right/3) - Math.ceil(current/3));
                rightcoldiff = Math.abs((right%3 == 0 ? 3 : right%3) - (current%3 == 0 ? 3 : current%3));
                if(leftrowdiff + leftcoldiff  > rightrowdiff + rightcoldiff) {
                    right = current;
                    answer += 'R';
                } else if(leftrowdiff + leftcoldiff < rightrowdiff + rightcoldiff) {
                    left = current;
                    answer += 'L';
                } else {
                    if(hand == 'left') {
                        left = current;
                        answer += 'L';
                    } else {
                        right =current;
                        answer += 'R';
                    }
                }
                break;
        }
    }
    
    return answer;
}
