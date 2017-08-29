package baekjoon;

import java.util.Scanner;

public class Baekjoon1912 {
	
	public void solve() {
		
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int input[] = new int[n];
		int dp[] = new int[n];
		int result = -1001;
		for(int i=0; i<n; i++) {
			input[i] = sc.nextInt();
			if(i == 0) {
				dp[i] = input[i];
			}
			else {
				dp[i] = (dp[i-1] + input[i] > input[i] ? dp[i-1] + input[i] : input[i]);
			}
			result = result > dp[i] ? result : dp[i];
		}
		System.out.print(result);
		sc.close();
	}

}
