t=input()
m=[[] for i in range(t)]
r=[[] for i in range(t)]
for i in range(t):
    m[i]=[int(s) for s in raw_input().split(" ")]
    r[i]=[0]*t
def f(_m,z,t,r,b):
    a=z.pop()
    for i in range(t):
        if _m[a][i]==1 and r[b][i]!=1:
            z.append(i)
            r[b][i]=1
            f(_m,z,t,r,b)
for i in range(t):
    k=[]
    for j in range(t):
        if m[i][j]==1:
            k.append(j)
            r[i][j]=1
            f(m,k,t,r,i)
    for j in range(t):
        print r[i][j],
    print ""
