public class SavingsAccount extends Account implements AccountOperations {

	private double interestRate;

	public SavingsAccount() {
		this("SAV-000", "Unknown", 0.0, 0.0);
	}

	public SavingsAccount(String accountNumber, String accountHolderName, double balance, double interestRate) {
		super(accountNumber, accountHolderName, "Savings", balance);
		setInterestRate(interestRate);
	}

	public double getInterestRate() {
		return interestRate;
	}

	public final void setInterestRate(double interestRate) {
		if (Double.isNaN(interestRate) || Double.isInfinite(interestRate) || interestRate < 0) {
			throw new IllegalArgumentException("Interest rate must be non-negative");
		}
		this.interestRate = interestRate;
	}

	public double calculateInterest(int years) {
		if (years < 0) {
			throw new IllegalArgumentException("Years cannot be negative");
		}
		return getBalance() * interestRate * years / 100.0;
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
		if (amount > getBalance()) {
			throw new IllegalArgumentException("Insufficient funds in savings account.");
		}
		setBalance(getBalance() - amount);
	}
}
