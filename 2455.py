passenger = 0
m = 0
for i in range(4):
    getout, getin = input().split()
    passenger += int(getin)
    passenger -= int(getout)
    if passenger > 10000:
        passenger = 10000
    if m < passenger:
        m = passenger
print(m)