public abstract class Account {
	private String accountNumber;
	private String accountHolderName;
	private String accountType;
	private double balance;
	private boolean active;

	protected Account() {
		this.active = true;
	}

	protected Account(String accountNumber, String accountHolderName,
					  String accountType, double balance) {
		this.accountNumber = accountNumber;
		this.accountHolderName = accountHolderName;
		this.accountType = accountType;
		this.balance = balance;
		this.active = true;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getAccountHolderName() {
		return accountHolderName;
	}

	public void setAccountHolderName(String accountHolderName) {
		this.accountHolderName = accountHolderName;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		if (balance < 0) {
			throw new IllegalArgumentException("Balance cannot be negative.");
		}
		this.balance = balance;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
}
