package baekjoon;

import java.util.Scanner;

public class Baekjoon11053 {
	
	public void solve() {
		
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int l[] = new int[n];
		int input[] = new int[n];
		int now = 0;
		int size = 0;
		for(int i=0; i<n; i++) {
			input[i] = sc.nextInt();
		}
		for(int i=0; i<n; i++) {
			if(input[i] > now) {
				l[size++] = input[i];
				now = input[i];
			}
			else {
				for(int j=0; j<size; j++) {
					if(l[j] >= input[i]) {
						l[j] = input[i];
						now = l[size-1];
						break;
					}
				}
			}
		}
		System.out.print(size);
		sc.close();
	}

}
