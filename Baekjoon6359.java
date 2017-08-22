package baekjoon;

import java.util.Scanner;

public class Baekjoon6359 {

	public void solve() {
		Scanner sc = new Scanner(System.in);
		int tc = sc.nextInt();
		int q[] = new int[tc];
		int room[] = new int[101];
		int dp[] = new int[101];
		for(int j=1; j<101; j++) {
			for(int i=j; i<101; i++) {
				if(i % j == 0) {
					if(room[i] == 0) {
						room[i] = 1;
					}
					else {
						room[i] = 0;
					}
				}
			}
			dp[j] += dp[j-1] + room[j];
		}
		for(int i=0; i<tc; i++) {
			q[i] = sc.nextInt();
		}
		for(int i=0; i<tc; i++) {
			if(i<tc-1)
				System.out.println(dp[q[i]]);
			else
				System.out.print(dp[q[i]]);
		}
	}
}
