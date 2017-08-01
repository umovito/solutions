n, m = [int(i) for i in input().split()]
dex = {}
for i in range(n):
	x = input()
	dex[str(i+1)] = x
	dex[x] = str(i+1)
for i in range(m):
	print(dex[input()])