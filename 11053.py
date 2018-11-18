t = input()
nums = [int(n) for n in raw_input().split(" ")]
lis = []
for num in nums:
    if len(lis) == 0:
        lis.append(num)
    for i in range(len(lis)-1, 0, -1):
        if lis[i] > num:
            lis = lis[:i]
            lis.append(num)
