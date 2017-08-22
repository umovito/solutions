package baekjoon;

import java.util.Scanner;

public class Baekjoon2579 {

	public void solve() {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int[] stair = new int[n+1];
		int[] dp = new int[n+1];
		for(int i=1; i<=n; i++) {
			stair[i] = sc.nextInt();
		}
		for(int i=1; i<=3 && i<=n; i++) {
			if(i<3) {
				dp[i] = dp[i-1] + stair[i];
			}
			else {
				dp[i] = max(stair[i] + dp[i-2], stair[i] + stair[i-1]);
			}
		}
		for(int i=4; i<=n; i++) {
			dp[i] = max(stair[i] + dp[i-2], stair[i] + stair[i-1] + dp[i-3]);
		}
		System.out.print(dp[n]);
	}
	public int max(int a, int b) {
		return a > b ? a : b;
	}
}
