N = int(input())
dp = [int(n) for n in range(N+1)]
for x in range(2, N+1):
    for y in range(2, x+1):
        if y*y > x:
            break
        else:
            dp[x] = min(dp[x], dp[x - y*y] + 1)
print(dp[N])