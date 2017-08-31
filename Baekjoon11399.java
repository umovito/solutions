package baekjoon;

import java.util.Arrays;
import java.util.Scanner;

public class Baekjoon11399 {

	public void solve() {
		Scanner sc = new Scanner(System.in);
		int size = sc.nextInt();
		int[] input = new int[size];
		for(int i=0; i<size; i++) {
			input[i] = sc.nextInt();
		}
		Arrays.sort(input);
		int sum = 0;
		for(int i=0; i<size; i++) {
			for(int j=0; j<=i; j++) {
				sum += input[j];
			}
		}
		System.out.print(sum);
		sc.close();
	}
}
