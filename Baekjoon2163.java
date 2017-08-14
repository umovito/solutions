package baekjoon;

import java.util.Scanner;

public class Baekjoon2163 {

	public void solve() {
		// 굳이 dynamic하게 풀지 않아도 되는 문제긴 하다
		Scanner sc = new Scanner(System.in);
		int[] input = new int[2];
		int[] dp = new int[301];
		for(int i=0; i<2; i++) {
			input[i] = sc.nextInt();
		}
		dp[1] = input[0] - 1;
		for(int i=2; i<=input[1]; i++) {
			dp[i] = dp[i-1] + input[0];
		}
		System.out.print(dp[input[1]]);
	}
}
