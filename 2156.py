t = input()
wine = []
dp = []
for testcase in range(t):
    wine.append(input())
    if testcase == 0:
        dp.append(wine[0])
    elif testcase == 1:
        dp.append(wine[0] + wine[1])
    elif testcase == 2:
        dp.append(max(wine[0] + wine[1], wine[0] + wine[2], wine[1] + wine[2]))
    else:
        dp.append(max(wine[testcase]+wine[testcase-1]+dp[testcase-3], wine[testcase]+dp[testcase-2], dp[testcase-1]))
print(dp[-1])
