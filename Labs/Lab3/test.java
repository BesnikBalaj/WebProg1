/**
 * CS501-WS
 * I pledge my honor that I have abided the Stevens Honor System - Amanda Ly
 * Textbook: 11th Edition
 * CS Track
 * @author Amanda
 *
 * Chapter5 Question16: Find the factors of an integer
 * Chapter5 Question20: Display prime numbers between 2 and 1000
 * Chapter6 Question10: Use the isPrime Method
 */

import java.util.*;

public class C5E16_C5E20_C6E10_PrimesandFactors {
	public static void main(String[] args) {

		int repeat = 0;
		int loop = 0;
		while (repeat == 0) {

			Scanner input = new Scanner(System.in);
			System.out.println("Enter an integer");
			int num = input.nextInt();

			// C5E16: Write a program that reads an integer and displays all its smallest
			// factors in an increasing order.
			// For Example: if the input integer is 120, the output should be as follows:
			// 2,2,2,3,5
			System.out.println("The following program found the factors of the inputted integer above:\n");
			smallestFactors(num);
			System.out.println("\n---------------------------------------------------------------------\n");

			// C5E20: Display prime numbers between 2 and 1000, inclusive.
			// Display eight prime numbers per line. Numbers are separated by exactly one
			// space.
			System.out.println("The following program will display the prime numbers:\n");
			System.out.println("Default: The prime numbers between 2 and 1000 are: ");
			primeNumber(1000);
			System.out.println("\n");
			System.out.printf("The prime numbers between 2 and " + num + " are:\n");
			primeNumber(num);
			System.out.println("\n---------------------------------------------------------------------\n");

			//// C6E10: provides the isPrime method for testing whether a number is prime.
			// Use this method to find the number of prime numbers less than 10000.
			System.out.println("The following program will display the number of prime numbers:\n");
			System.out.printf("Default: The number of prime numbers less than 10,000 is: ");
			countPrime(10000);
			System.out.printf("The number of prime numbers less than " + num + " is: ");
			countPrime(num);
			System.out.println("\n---------------------------------------------------------------------\n");

			// Extra Deliverables
			// 1. Display the first 50 prime numbers
			System.out.println("Extra Deliverables\n");
			System.out.println("The first 50 prime numbers are: ");
			primeNumber(50);
			// 2. Populate an array containing the prime numbers less than 1000
			System.out.println("\n\nThe array containing the prime numbers less than 1000 is: ");
			System.out.println("YA YEEET");
			printArray(1000);
			// 3. In a repeat loop, ask the user to enter one number at a time and test if
			// it is prime by searching the array with primes less than 1000.
			// If not, show its factors.
			while (loop == 0) {
				System.out.println(
						"\n\nCheck if user entered number is prime; if not factors will be displayed. Note number must be less than 1000 ");
				System.out.println("Enter a number you want to check");
				int n = input.nextInt();
				int[] prime = new int[] { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
						73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
						179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277,
						281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397,
						401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
						521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641,
						643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761,
						769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887,
						907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 };
				checkArray(prime, n);

				System.out.println("\nEnter 0 to check another number; Anything else to quit.");
				loop = input.nextInt();
			}

			System.out.println("\nEnter 0 to test again; Anything else to quit.");
			repeat = input.nextInt();
		}
	}

	public static void smallestFactors(int num) {
		if (num <= 0) {
			System.out.println("Error. Try again with a number greater than 0.");
		} else if (num == 1) {
			System.out.println("1");
		} else {
			int i = 2;
			while (num != 1) {
				if (num % i == 0) {
					System.out.print(i + " ");
					num /= i;
				} else {
					i++;
				}
			}
		}
	}

	public static void primeNumber(int num) {
		final int NUMBER_OF_PRIMES_PER_LINE = 8; // Display 8 per line
		int count = 0;

		for (int i = 2; i <= num; i++) { // start at i = 2 because its the first prime number
			if (count == NUMBER_OF_PRIMES_PER_LINE) {
				System.out.println();
				System.out.print("Rawr");
				System.out.println("\n");
				count = 0;
			}
			if (isPrime(i)) {
				//System.out.print("Rawr");
				System.out.printf("%d ", i);
				count++;
			}
		}
	}

	public static void countPrime(int num) {
		int cnt = 0;
		for (int i = 2; i < num; i++) {
			if (isPrime(i)) {
				cnt = cnt + 1;
			}
		}
		System.out.println(cnt);
	}

	// From textbook:
	public static boolean isPrime(int number) {
		for (int divisor = 2; divisor <= number / 2; divisor++) {
			if (number % divisor == 0) {
				return false;
			}
		}
		return true;
	}

	public static void printArray(int num) {//CHECK THAT THIS WORKS
		ArrayList<Integer> primes = new ArrayList<Integer>();
		final int NUMBER_PER_LINE = 8; // Display 8 per line
		int amt = 0;
		for (int i = 2; i <= num; i++) {// start at i = 2 because its the first prime number
			if (isPrime(i)) {
				primes.add(i);
			}
		}
		System.out.printf("[");
		//System.out.print("Wassup Fam");
		for (int i = 0; i < primes.size(); i++) {// start at i = 2 because its the first prime number
			if (amt == NUMBER_PER_LINE) {
				System.out.println();
				System.out.println("\n");
				amt = 0;
			}
			if (i == primes.size()-1){
				System.out.printf("%d", primes.get(i));
			}
			else{
				System.out.printf("%d, ", primes.get(i));
				amt++;
			}
		}
		System.out.printf("]");
	}

	public static void checkArray(int[] array, int check) {
		if (check >= 1000) {
			System.out.println("Try again with a value less than 1000.");
		} else {
			int test = 1;
			for (int i = 0; i < array.length; i++) {
				for (int j : array) {
					if (j == check) {
						test = 2;
						break;
					}
				}
			}
			if (test == 2) {
				System.out.printf(check + " is in the array; It it prime");
			}
			else {
				smallestFactors(check);
			}
		}
	}
}
