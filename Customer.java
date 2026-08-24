import java.util.ArrayList;
import java.util.List;

public class Customer extends User {
	private final List<Account> accounts = new ArrayList<>();

	public Customer(String userName, String password, String name, String email) {
		super(userName, password, name, email);
	}

	public List<Account> getAccounts() {
		return accounts;
	}

	public void addAccount(Account account) {
		if (account != null) {
			accounts.add(account);
		}
	}

	public void removeAccount(String accountNumber) {
		accounts.removeIf(account -> account.getAccountNumber().equals(accountNumber));
	}

	@Override
	public String getRole() {
		return "Customer";
	}
}
