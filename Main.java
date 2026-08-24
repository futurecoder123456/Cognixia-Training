import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Bank bank = new Bank(scanner);
		bank.seedData();
		bank.printMessage("Welcome to the Banking Application");
		bank.printMessage("Use one of the seeded accounts below:");
		bank.printMessage("Admin -> username: admin | password: admin123");
		bank.printMessage("Customer -> username: alice | password: pass123");

		boolean loggedIn = false;
		while (!loggedIn) {
			bank.printMessage("\nEnter username: ");
			String username = scanner.nextLine();
			bank.printMessage("Enter password: ");
			String password = scanner.nextLine();

			User user = bank.login(username, password);
			if (user == null) {
				bank.printMessage("Invalid username or password. Try again.");
				continue;
			}

			if (user instanceof Admin admin) {
				bank.printMessage("Admin login successful.");
				bank.adminDashboard(admin, scanner);
			} else if (user instanceof Customer customer) {
				bank.printMessage("Customer login successful.");
				bank.customerDashboard(customer, scanner);
			} else {
				bank.printMessage("Unknown user type.");
			}
			loggedIn = true;
		}

		bank.printMessage("\nThank you for using the Banking Application.");
		scanner.close();
	}
}
