X = 64
tries = 0
goal = int(input())
sticks = 0

while True:
    if sticks > goal:
        break
    else:
        tries += 1
        X /= 2
        sticks += X
        print(sticks)
print(tries)
