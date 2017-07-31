i=a=input()
c=0
while 1:
	n=a/10+a%10
	a=(a%10)*10+n%10
	c+=1
	if a==i:
 		break
print c
