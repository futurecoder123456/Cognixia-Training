package com.alenapolman.bankapi.BankAPI;

import java.util.List;
import org.springframework.web.bind.annotation.*;  // Import necessary annotations for RESTful API because this is a controller class that will handle HTTP requests related to customers.
import org.springframework.http.ResponseEntity;  // Import ResponseEntity to handle HTTP responses in a more flexible way.

@RestController
@RequestMapping("/api/v1/customers")
public class CustomerController {
    private final CustomerRepository repository;  // Create an instance of the CustomerRepository to interact with the database.

    public CustomerController(CustomerRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Customer> getAllCustomers() {
        return repository.findAll();  // Retrieve all customers from the database.
    }

    @GetMapping("/{id}") // Handle GET requests to retrieve a customer by their ID.
    public ResponseEntity<Customer> getCustomerById(@PathVariable String id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)  // If the customer is found, return it with a 200 OK status.
                .orElse(ResponseEntity.notFound().build());  // If not found, return a 404 Not Found status.
    }

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) // Handle POST requests to create a new customer. 
    // The @RequestBody annotation indicates that the customer data will be provided in the request body.
    {
        return repository.save(customer);  // Save a new customer to the database.
    }

    @DeleteMapping("/{id}") // Handle DELETE requests to delete a customer by their ID.
    public ResponseEntity<Void> deleteCustomer(@PathVariable String id) {
        repository.deleteById(id);  // Delete the customer with the specified ID from the database.
        return ResponseEntity.noContent().build();  // Return a 204 No Content status to indicate that the deletion was successful.
    }
}
