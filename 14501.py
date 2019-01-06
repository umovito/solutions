n = int(input())
t = [0 for i in range(n+1)]
p = [0 for i in range(n+1)]
dp = [0 for i in range(n+1)]

for i in range(1, n+1):
    t[i], p[i] = map(int, input().split())
    dp[i] = p[i]

for i in range(2, n+1):
    for j in range(1, i):
        if i - j >= t[j]:
            dp[i] = max(p[i] + dp[j], dp[i])

m = 0;
 
for i in range(1, n+1):
    if i + t[i] <= n + 1:
        if m < dp[i]:
            m = dp[i]

print(m)