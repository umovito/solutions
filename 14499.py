h, w, x, y, z = [int(s) for s in raw_input().split(" ")]
m = [[] for a in range(h)]
for a in range(h):
    m[a] = [int(s) for s in raw_input().split(" ")]
instrcution = [int(s) for s in raw_input().split(" ")]
right = left = back = down = front = up = 0

def movedice(case):
    global x, y, w, h
    if case == 4 and x+1 < h:
        x += 1
        return True
    elif case == 3 and x-1 >= 0:
        x -= 1
        return True
    elif case == 1 and y+1 < w:
        y += 1
        return True
    elif case == 2 and y-1 >= 0:
        y -= 1
        return True
    else:
        return False

def copyvalue():
    global x, y, down
    if m[x][y]:
        down, m[x][y] = m[x][y], 0
    else:
        m[x][y] = down
    print up

def rolldice(direction):
    global up, left, down, right, front, back
    if direction == 1 and movedice(1):
        up, left, down, right = left, down, right, up
        copyvalue()
    elif direction == 2 and movedice(2):
        up, left, down, right = right, up, left, down
        copyvalue()
    elif direction == 3 and movedice(3):
        up, front, down, back = back, up, front, down
        copyvalue()
    elif direction == 4 and movedice(4):
        up, front, down, back = front, down, back, up
        copyvalue()
    else:
        pass

for i in instrcution:
    rolldice(i)
