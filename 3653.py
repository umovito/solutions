tc = int(input())
for i in range(tc):
	order = []
	look = []
	answer = []
	n, m = [int(x) for x in raw_input().split()]
	for j in range(n):
		order.append(j)
	print order
	look = [int(x) for x in raw_input().split()]
	for film in look:
		answer.append(order[film-1])
		for k in range(n):
			if order[k] < film:
				order[k] += 1
		order[film-1] = 0
	for j in answer:
		print j,