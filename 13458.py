t = input()
room = [int(s) for s in raw_input().split(" ")]
a, b = [int(s) for s in raw_input().split(" ")]
total = 0
for people in room:
    total += 1
    n = people - a
    if n > 0:
        m = n/b
        if n/(b*1.0) - m > 0:
            total += m + 1
        else:
            total += m
print total
