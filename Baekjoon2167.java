package baekjoon;

import java.util.Scanner;

public class Baekjoon2167 {

	public void solve() {
		
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int M = sc.nextInt();
		int matrix[][] = new int[N+1][M+1];
		int dp[][] = new int[N+1][M+1];
		for(int i=1; i<=N; i++) {
			for(int j=1; j<=M; j++) {
				matrix[i][j] = sc.nextInt();
				if (j-1 > 0) {
					dp[i][j] = dp[i][j-1] + matrix[i][j];
				}
				else {
					dp[i][j] = matrix[i][j];
				}
			}
		}
		int tc = sc.nextInt();
		int r[] = new int[tc];
		for(int a=0; a<tc; a++) {
			int i = sc.nextInt();
			int j = sc.nextInt();
			int x = sc.nextInt();
			int y = sc.nextInt();
			int result = 0;
			for(int b=i; b<=x; b++) {
				result += dp[b][y];
				if(j-1 > 0) {
					result -= dp[b][j-1];
				}
			}
			r[a] = result;
		}
		for(int i=0; i<tc; i++) {
			if(i==tc-1) System.out.print(r[i]);
			else System.out.println(r[i]);
		}
		sc.close();
	}
}
