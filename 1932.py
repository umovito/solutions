t = int(input())
tri = [[] for i in range(t)]
for i in range(t):
    tri[i] = [int(x) for x in input().split(" ")]
for i in range(t - 1):
    for j in range(len(tri[t-i-1]) - 1):
        tri[t-i-2] = max(tri[t-i-1][j] + tri[t-i-2][j], tri[t-i-1][j+1] + tri[t-i-2][j])
print(tri[0])
