import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class Bank {
	private final Map<String, User> users = new HashMap<>();
	private final Map<String, Account> accounts = new HashMap<>();
	private final Admin admin;
	private final Scanner scanner;

	public Bank(Scanner scanner) {
		this.scanner = scanner;
		this.admin = new Admin("admin", "admin123", "Bank Admin", "admin@bank.com");
		users.put(this.admin.getUserName(), this.admin);
	}

	public void seedData() {
		Customer alice = new Customer("alice", "pass123", "Alice Johnson", "alice@bank.com");
		Customer bob = new Customer("bob", "pass123", "Bob Smith", "bob@bank.com");

		SavingsAccount aliceSavings = new SavingsAccount("SAV-101", "Alice Johnson", 2500.0, 5.5);
		CheckingsAccount aliceChecking = new CheckingsAccount("CHK-101", "Alice Johnson", 1200.0, 500.0);
		SavingsAccount bobSavings = new SavingsAccount("SAV-202", "Bob Smith", 1800.0, 4.0);

		alice.addAccount(aliceSavings);
		alice.addAccount(aliceChecking);
		bob.addAccount(bobSavings);

		admin.addCustomer(alice);
		admin.addCustomer(bob);

		users.put(alice.getUserName(), alice);
		users.put(bob.getUserName(), bob);

		accounts.put(aliceSavings.getAccountNumber(), aliceSavings);
		accounts.put(aliceChecking.getAccountNumber(), aliceChecking);
		accounts.put(bobSavings.getAccountNumber(), bobSavings);
	}

	public User login(String userName, String password) {
		User user = users.get(userName);
		if (user != null && user.getPassword().equals(password)) {
			return user;
		}
		return null;
	}

	public void printMessage(String message) {
		System.out.println(message);
	}

	public void adminDashboard(Admin currentAdmin, Scanner scanner) {
		boolean running = true;
		while (running) {
			printMessage("\n=== Admin Dashboard ===");
			printMessage("1. View all customers");
			printMessage("2. View all accounts");
			printMessage("3. Add customer");
			printMessage("4. Delete customer");
			printMessage("5. Create account for customer");
			printMessage("6. Logout");
			printMessage("Choose option: ");

			String choice = scanner.nextLine();
			switch (choice) {
				case "1" -> viewAllCustomers(currentAdmin);
				case "2" -> viewAllAccounts();
				case "3" -> addCustomerFromInput();
				case "4" -> deleteCustomerFromInput(currentAdmin);
				case "5" -> createAccountForCustomer(currentAdmin);
				case "6" -> running = false;
				default -> printMessage("Invalid option.");
			}
		}
	}

	public void runAdminDemo(Admin admin) {
		printMessage("\n=== Admin Demo Login ===");
		printMessage("Logged in as admin: " + admin.getUserName());
		viewAllCustomers(admin);
		viewAllAccounts();

		Customer sample = new Customer("charlie", "charlie123", "Charlie Brown", "charlie@bank.com");
		if (admin.addCustomer(sample)) {
			users.put(sample.getUserName(), sample);
			printMessage("Created new customer: Charlie Brown");
		}
		viewAllCustomers(admin);

		if (admin.deleteCustomer("charlie")) {
			users.remove("charlie");
			printMessage("Deleted sample customer from admin flow.");
		}
	}

	public void customerDashboard(Customer customer, Scanner scanner) {
		boolean running = true;
		while (running) {
			printMessage("\n=== Customer Dashboard for " + customer.getName() + " ===");
			printMessage("1. View my accounts");
			printMessage("2. Deposit");
			printMessage("3. Withdraw");
			printMessage("4. Transfer");
			printMessage("5. Logout");
			printMessage("Choose option: ");

			String choice = scanner.nextLine();
			switch (choice) {
				case "1" -> viewCustomerAccounts(customer);
				case "2" -> depositFromInput(customer);
				case "3" -> withdrawFromInput(customer);
				case "4" -> transferFromInput(customer);
				case "5" -> running = false;
				default -> printMessage("Invalid option.");
			}
		}
	}

	public void runCustomerDemo(Customer customer) {
		printMessage("\n=== Customer Demo Login ===");
		printMessage("Logged in as customer: " + customer.getUserName());
		viewCustomerAccounts(customer);

		Account savings = findAccountByType(customer, "Savings");
		Account checking = findAccountByType(customer, "Checking");
		if (savings instanceof AccountOperations savingsOps) {
			savingsOps.deposit(250.0);
			printMessage("Deposited $250 into savings account. New balance: $" + savings.getBalance());
		}
		if (checking instanceof AccountOperations checkingOps) {
			checkingOps.withdraw(100.0);
			printMessage("Withdrew $100 from checking account. New balance: $" + checking.getBalance());
		}
		if (savings != null && checking != null && savings instanceof AccountOperations savingsOps && checking instanceof AccountOperations checkingOps) {
			checkingOps.withdraw(150.0);
			savingsOps.deposit(150.0);
			printMessage("Transferred $150 from checking to savings.");
			printMessage("Savings balance: $" + savings.getBalance());
			printMessage("Checking balance: $" + checking.getBalance());
		}
		viewCustomerAccounts(customer);
	}

	private void viewAllCustomers(Admin admin) {
		List<Customer> customers = new ArrayList<>(admin.getCustomers());
		if (customers.isEmpty()) {
			printMessage("No customers found.");
			return;
		}
		for (Customer c : customers) {
			printMessage("Customer: " + c.getName() + " | Username: " + c.getUserName() + " | Email: " + c.getEmail());
		}
	}

	private void viewAllAccounts() {
		if (accounts.isEmpty()) {
			printMessage("No accounts found.");
			return;
		}
		for (Account account : accounts.values()) {
			printMessage("Account: " + account.getAccountNumber() + " | Type: " + account.getAccountType()
					+ " | Holder: " + account.getAccountHolderName() + " | Balance: $" + account.getBalance());
		}
	}

	private void addCustomerFromInput() {
		printMessage("Enter username: ");
		String userName = scanner.nextLine();
		printMessage("Enter password: ");
		String password = scanner.nextLine();
		printMessage("Enter full name: ");
		String name = scanner.nextLine();
		printMessage("Enter email: ");
		String email = scanner.nextLine();

		Customer customer = new Customer(userName, password, name, email);
		if (admin.addCustomer(customer)) {
			users.put(userName, customer);
			printMessage("Customer added successfully.");
		} else {
			printMessage("Customer could not be added.");
		}
	}

	private void deleteCustomerFromInput(Admin currentAdmin) {
		printMessage("Enter username to delete: ");
		String userName = scanner.nextLine();
		if (currentAdmin.deleteCustomer(userName)) {
			users.remove(userName);
			printMessage("Customer deleted successfully.");
		} else {
			printMessage("Customer not found.");
		}
	}

	private void createAccountForCustomer(Admin currentAdmin) {
		printMessage("Enter customer username: ");
		String userName = scanner.nextLine();
		User user = users.get(userName);
		if (!(user instanceof Customer customer)) {
			printMessage("Customer not found.");
			return;
		}

		printMessage("Choose account type: 1) Savings  2) Checking");
		String typeChoice = scanner.nextLine();

		String accountNumber;
		while (true) {
			printMessage("Enter account number: ");
			accountNumber = scanner.nextLine();
			if (!accounts.containsKey(accountNumber)) {
				break;
			}
			printMessage("Account number already exists. Please enter a different number.");
		}

		printMessage("Enter initial balance: ");
		double balance = Double.parseDouble(scanner.nextLine());

		Account newAccount;
		if (typeChoice.equals("1")) {
			printMessage("Enter interest rate: ");
			double interestRate = Double.parseDouble(scanner.nextLine());
			newAccount = new SavingsAccount(accountNumber, customer.getName(), balance, interestRate);
		} else if (typeChoice.equals("2")) {
			printMessage("Enter overdraft limit: ");
			double overdraftLimit = Double.parseDouble(scanner.nextLine());
			newAccount = new CheckingsAccount(accountNumber, customer.getName(), balance, overdraftLimit);
		} else {
			printMessage("Invalid account type.");
			return;
		}

		customer.addAccount(newAccount);
		accounts.put(newAccount.getAccountNumber(), newAccount);
		printMessage("Account created successfully for " + customer.getName() + ".");
		printMessage("New account: " + newAccount.getAccountNumber() + " | Type: " + newAccount.getAccountType() + " | Balance: $" + newAccount.getBalance());
	}

	private void viewCustomerAccounts(Customer customer) {
		if (customer.getAccounts().isEmpty()) {
			printMessage("No accounts found for this customer.");
			return;
		}
		for (Account account : customer.getAccounts()) {
			printMessage("Account: " + account.getAccountNumber() + " | Type: " + account.getAccountType()
					+ " | Balance: $" + account.getBalance());
		}
	}

	private void depositFromInput(Customer customer) {
		printMessage("Enter account number: ");
		String accountNumber = scanner.nextLine();
		Account account = findAccount(customer, accountNumber);
		if (account == null) {
			printMessage("Account not found.");
			return;
		}
		printMessage("Enter amount to deposit: ");
		double amount = Double.parseDouble(scanner.nextLine());
		if (account instanceof AccountOperations operations) {
			operations.deposit(amount);
			printMessage("Deposit successful. New balance: $" + account.getBalance());
		} else {
			printMessage("This account type does not support deposits.");
		}
	}

	private void withdrawFromInput(Customer customer) {
		printMessage("Enter account number: ");
		String accountNumber = scanner.nextLine();
		Account account = findAccount(customer, accountNumber);
		if (account == null) {
			printMessage("Account not found.");
			return;
		}
		printMessage("Enter amount to withdraw: ");
		double amount = Double.parseDouble(scanner.nextLine());
		if (account instanceof AccountOperations operations) {
			try {
				operations.withdraw(amount);
				printMessage("Withdrawal successful. New balance: $" + account.getBalance());
			} catch (IllegalArgumentException e) {
				printMessage(e.getMessage());
			}
		} else {
			printMessage("This account type does not support withdrawals.");
		}
	}

	private void transferFromInput(Customer customer) {
		printMessage("Enter source account number: ");
		String fromAccountNumber = scanner.nextLine();
		printMessage("Enter destination account number: ");
		String toAccountNumber = scanner.nextLine();
		printMessage("Enter amount: ");
		double amount = Double.parseDouble(scanner.nextLine());

		Account from = findAccount(customer, fromAccountNumber);
		Account to = accounts.get(toAccountNumber);
		if (from == null || to == null) {
			printMessage("Source or destination account not found.");
			return;
		}
		if (from instanceof AccountOperations operations) {
			try {
				operations.withdraw(amount);
				if (to instanceof AccountOperations toOps) {
					toOps.deposit(amount);
					printMessage("Transfer successful.");
				} else {
					printMessage("Destination account cannot receive transfers.");
				}
			} catch (IllegalArgumentException e) {
				printMessage(e.getMessage());
			}
		}
	}

	private Account findAccount(Customer customer, String accountNumber) {
		for (Account account : customer.getAccounts()) {
			if (account.getAccountNumber().equals(accountNumber)) {
				return account;
			}
		}
		return null;
	}

	private Account findAccountByType(Customer customer, String accountType) {
		for (Account account : customer.getAccounts()) {
			if (account.getAccountType().equalsIgnoreCase(accountType)) {
				return account;
			}
		}
		return null;
	}
}
