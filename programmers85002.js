function solution(weights, head2head) {
    var answer = [];
    var winningRate = [];
    var heavierWins = [];
    var win = 0;
    var lose = 0;
    var heavierWin = 0;
    
    for(i in weights) {
        answer.push(Number(i)+1);
    }
    
    for(var h=0; h<head2head.length; h++) {
        win = 0;
        lose = 0;
        heavierWin = 0;
        for(var i=0; i<head2head.length; i++) {
            switch(head2head[h].substring(i, i+1)) {
                case 'W': {
                    win++;
                    if(weights[h] < weights[i]) {
                        heavierWin++;
                    }
                    break;
                }
                case 'L': lose++; break;
            }
        }
        if(win + lose == 0) winningRate.push(0);
        else winningRate.push(win/(win+lose));
        heavierWins.push(heavierWin);
    }
    answer.sort(function(a, b) {
       return winningRate[b-1] - winningRate[a-1] ; 
    });
    
    var listWinrate = [];
    var list = [];
    for(var i=0; i<answer.length; i++) {
        list = [];
        for(var j=i; j<answer.length; j++) {
            if(winningRate[answer[i]-1] == winningRate[answer[j]-1]) {
                list.push(answer[j]);
                if(j == answer.length-1) {
                    listWinrate.push(list);
                    i = j;
                }
            } else {
                listWinrate.push(list);
                i = j-1;
                break;
            }
        }
    }
    
    for(var i=0; i<listWinrate.length; i++) {
        listWinrate[i] = listWinrate[i].sort(function(a, b) {
            return heavierWins[b-1] - heavierWins[a-1];
        });
    }
    
    var listHeavywin = [];
    for(var i=0; i<listWinrate.length; i++) {
        for(var j=0; j<listWinrate[i].length; j++) {
            list = [];
            for(var k=j; k<listWinrate[i].length; k++) {
                if(heavierWins[listWinrate[i][j]-1] == heavierWins[listWinrate[i][k]-1]) {
                    list.push(listWinrate[i][k]);
                    if(k == listWinrate[i].length - 1) {
                        listHeavywin.push(list);
                        j = k;
                        break;
                    }
                } else {
                    listHeavywin.push(list);
                    j = k-1;
                    break;
                }
            }
        }
    }
    
    var listFinal = [];
    for(var x=0; x<listHeavywin.length; x++) {
        listHeavywin[x] = listHeavywin[x].sort(function(a, b) {
            return weights[b-1] - weights[a-1];
        });
        for(var i=0; i<listHeavywin[x].length; i++) {
            listFinal.push(listHeavywin[x][i]);
        }
    }
    
    return listFinal;
}
