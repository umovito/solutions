t = input()
nums = [int(s) for s in raw_input().split(" ")]
dp = ["x"] * t
for i in range(t):
    sumv = 0
    if nums[i] < 0:
    for j in range(i, t):
        sumv += nums[j]
