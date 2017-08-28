package baekjoon;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Baekjoon1463 {
	
	public void solve() {
		
		Scanner sc = new Scanner(System.in);
		int input = sc.nextInt();
		sc.close();
		Queue<Integer> q = new LinkedList<Integer>();
		Queue<Integer> s = new LinkedList<Integer>();
		q.offer(input);
		int dp[] = new int[input+1];
		int count = 1;
		while(q.size() > 0) {
			int a = q.poll();
			if(a == 1) {
				System.out.print(dp[1]);
				break;
			}
			if(a % 3 == 0) {
				if(dp[a/3] < 1) {
					s.add(a/3);
					dp[a/3] = count;
				}
			}
			if(a % 2 == 0) {
				if(dp[a/2] < 1) {
					s.add(a/2);
					dp[a/2] = count;
				}
			}
			if(a-1 >= 0 && dp[a-1] < 1) {
				s.add(a-1);
				dp[a-1] = count;
			}
			if(q.size() == 0) {
				q.addAll(s);
				count++;
			}
		}
	}
}
