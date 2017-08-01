on = set()
for i in range(int(input())):
	name, check = input().split()
	if check == 'enter':
		on.add(name)
	else:
		on.remove(name)
for nm in sorted(on, reverse=True):
	print(nm)