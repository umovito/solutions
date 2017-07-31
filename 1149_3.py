n=int(input())
rgb = [[] * int(i) for i in range(n)]
dp = [[0] * 3 for i in range(2)]
for i in range(n):
	rgb[i] = [int(x) for x in input().split(" ")]
dp[0] = rgb[0]
for i in range(1,n):
	dp[1][0] = rgb[i][0] + min(dp[0][1], dp[0][2])
	dp[1][1] = rgb[i][1] + min(dp[0][0], dp[0][2])
	dp[1][2] = rgb[i][2] + min(dp[0][0], dp[0][1])
	dp[0][0] = dp[1][0]
	dp[0][1] = dp[1][1]
	dp[0][2] = dp[1][2]
print(min(dp[0]))