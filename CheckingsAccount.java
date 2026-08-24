public class CheckingsAccount extends Account implements AccountOperations {

	private double overdraftLimit;

	public CheckingsAccount() {
		this("CHK-000", "Unknown", 0.0, 0.0);
	}

	public CheckingsAccount(String accountNumber, String accountHolderName, double balance, double overdraftLimit) {
		super(accountNumber, accountHolderName, "Checking", balance);
		setOverdraftLimit(overdraftLimit);
	}

	public double getOverdraftLimit() {
		return overdraftLimit;
	}

	public final void setOverdraftLimit(double overdraftLimit) {
		if (Double.isNaN(overdraftLimit) || Double.isInfinite(overdraftLimit) || overdraftLimit < 0) {
			throw new IllegalArgumentException("Overdraft limit must be non-negative");
		}
		this.overdraftLimit = overdraftLimit;
	}

	@Override
	public void deposit(double amount) {
		if (amount <= 0) {
			throw new IllegalArgumentException("Deposit amount must be positive.");
		}
		setBalance(getBalance() + amount);
	}

	@Override
	public void withdraw(double amount) {
		if (amount <= 0) {
			throw new IllegalArgumentException("Withdrawal amount must be positive.");
		}
		double availableBalance = getBalance() + overdraftLimit;
		if (amount > availableBalance) {
			throw new IllegalArgumentException("Withdrawal exceeds overdraft limit.");
		}
		setBalance(getBalance() - amount);
	}
}
