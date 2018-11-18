ar = [-1,0,1,-1,1,-1,0,1]
ac = [-1,-1,-1,0,0,1,1,1]

active = True
cnt = 0
_map = []

def bfs(r,c):
    global _map, ar, ac
    for i in range(8):
        if r + ar[i] >= height or r + ar[i] < 0 or c + ac[i] >= width or c + ac[i] < 0:
            continue
        if _map[r + ar[i]][c + ac[i]] == 1:
            _map[r + ar[i]][c + ac[i]] = 0
            bfs(r + ar[i], c + ac[i])

while active:
    width, height = [int(s) for s in raw_input().split(" ")]
    if width == 0 and height == 0:
        active = False
        break
    else:
        cnt = 0
        _map = [[] for s in range(height)]
        for h in range(height):
            _map[h] = [int(s) for s in raw_input().split(" ")]
        for i in range(width):
            for j in range(height):
                if _map[j][i] == 1:
                    _map[j][i] = 0
                    cnt += 1
                    bfs(j,i)
        print cnt
