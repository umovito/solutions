N = int(input())
for i in range(N):
    line = input()
    stack1 = []
    stack2 = []
    output = ""
    for c in line:
        if c == "<":
            if len(stack1) > 0:
                stack2.append(stack1.pop())
        elif c == ">":
            if len(stack2) > 0:
                stack1.append(stack2.pop())
        elif c == "-":
            if len(stack1) > 0:
                stack1.pop()
        else:
            stack1.append(c)
    while len(stack1) > 0:
        stack2.append(stack1.pop())
    while len(stack2) > 0:
        output = output + stack2.pop()
    print(output)