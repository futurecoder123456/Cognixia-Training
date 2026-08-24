import java.util.Collection;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;

public class Admin extends User {
	private final Map<String, Customer> customers = new LinkedHashMap<>();

	public Admin(String userName, String password, String name, String email) {
		super(userName, password, name, email);
	}

	@Override
	public String getRole() {
		return "Admin";
	}

	public Collection<Customer> getCustomers() {
		return Collections.unmodifiableCollection(customers.values());
	}

	public Customer getCustomer(String userName) {
		return customers.get(userName);
	}

	public boolean addCustomer(Customer customer) {
		if (customer == null || customer.getUserName() == null || customer.getUserName().isBlank()
				|| customers.containsKey(customer.getUserName())) {
			return false;
		}
		customers.put(customer.getUserName(), customer);
		return true;
	}

	public boolean updateCustomer(String userName, String name, String email) {
		Customer customer = customers.get(userName);
		if (customer == null) {
			return false;
		}
		customer.setName(name);
		customer.setEmail(email);
		return true;
	}

	public boolean deleteCustomer(String userName) {
		return customers.remove(userName) != null;
	}
}
