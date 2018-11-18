def erase(x,nds,l):
	l[x] = False
	if(nds[x] == -1):
		l = [False for i in range(n)]
	else:
		for i in range(n):
			if nds[i] == x:
				erase(i)
n = input()
nodes = [int(i) for i in raw_input().split(" ")]
t = input()
leaf = [True for i in range(n)]
for i in nodes:
	if i==-1:
		pass
	else:
		leaf[i]=False
leaf[t] = False
erase(t,nodes,leaf)
print leaf.count(True)