package baekjoon;

import java.util.Scanner;

public class Baekjoon11052 {

	public void solve() {
		
		Scanner sc = new Scanner(System.in);
		int number = Integer.parseInt(sc.nextLine());
		int[] dp = new int[number+1];
		int[] tmp = new int[number+1];
		for(int i=1; i<=number; i++) {
			tmp[i] = sc.nextInt();
		}
		for(int i=1; i<=number; i++) {
			for(int j=1; j<=i; j++) {
				dp[i] = dp[i] > dp[i-j] + tmp[j] ? dp[i] : dp[i-j] + tmp[j];
			}
		}
		System.out.print(dp[number]);
	}

}
