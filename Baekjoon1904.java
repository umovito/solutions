import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Baekjoon1904 {
	
	public void solve() {
		
		Scanner sc = new Scanner(System.in);
		int N = Integer.parseInt(sc.nextLine());
		Long dp[] = new Long[N+1];
		dp[0] = Long.parseLong("0");
		dp[1] = Long.parseLong("1");
		dp[2] = Long.parseLong("2");
		
		for(int i=3; i<=N; i++) {
			dp[i] = dp[i-1] + dp[i-2];
			dp[i] %= 15746; 
		}
		System.out.print(dp[N]);
        sc.close();
        
	}
}
