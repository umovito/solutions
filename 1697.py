a, b = [int(i) for i in raw_input().split(" ")]
m=[0] * 100001
q=[]
q.append(a)
c=0
ing=True
while ing:
	qs = len(q)
	for i in range(qs):
		m[q[i]] = 1
		if q[i]!=b:
			if q[i]-1 >= 0 and m[q[i]-1] == 0:
				q.append(q[i]-1)
			if q[i]+1 <= 100000 and m[q[i]+1] == 0:
				q.append(q[i]+1)
			if q[i]*2 <= 100000 and m[q[i]*2] == 0:
				q.append(q[i]*2)
		else:
			ing=False
			print c
			break
	c+=1
	q=q[qs:]