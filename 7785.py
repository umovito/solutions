n = int(raw_input())
on = []
for i in range(n):
	name, check = raw_input().split(" ")
	if check == 'enter':
		on.append(name)
	else:
		on.remove(name)
on.sort(reverse=True)
for nm in on:
	print nm