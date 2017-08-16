package baekjoon;

import java.util.Scanner;

public class Baekjoon2293 {
	
	public void solve() {
		Scanner sc = new Scanner(System.in);
		int[] dp = new int[10001];
		dp[0] = 1;
		int[] input = new int[2];
		for(int i=0; i<2; i++) {
			input[i] = sc.nextInt();
		}
		int[] coins = new int[input[0]];
		for(int i=0; i<input[0]; i++) {
			coins[i] = sc.nextInt();
		}
		for(int i=0; i<input[0]; i++) {
			for(int j=coins[i]; j<=input[1]; j++) {
				dp[j] += dp[j - coins[i]];
			}
		}
		System.out.print(dp[input[1]]);
		
	}
	
}
