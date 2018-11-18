t = input()
dp = []
b = a = 0
for i in range(t):
    a = input()
    if i==0:
        dp.append(a)
    elif i==1:
        dp.append(dp[0]+a)
    elif i==2:
        dp.append(max(dp[0]+a, b+a))
    elif i>2:
        dp.append(max(dp[i-3]+b+a, dp[i-2]+a))
    b = a
print dp[-1]
