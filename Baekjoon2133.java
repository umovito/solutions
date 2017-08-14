package baekjoon;

import java.util.Scanner;

public class Baekjoon2133 {

	public void solve() {
		Scanner sc = new Scanner(System.in);
		int number = sc.nextInt();
		
		int[] dp = new int[31];
		dp[0] = 1;
		dp[2] = 3;
		for(int i=4; i<=number; i+=2) {
			dp[i] += dp[i-2]*3;
			for(int j=4; j<=i; j+=2) {
				dp[i] += dp[i-j] * 2;
			}
		}
		System.out.print(dp[number]);
	}
}
