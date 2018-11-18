i = int(input())
m = [0] * 100001
queue = [i]
count = 1
while len(queue) > 0:
	a = queue.pop()
	if a == 1:
		break
	if a % 3 == 0:
		if m[a/3] == 0:
			queue.append(a/3)
			m[a/3] = count
	if a % 2 == 0:
		if m[a/2] == 0:
			queue.append(a/2)
			m[a/2] = count
	if m[a-1] == 0:
		queue.append(a-1)
		m[a-1] = count
	count += 1
print count