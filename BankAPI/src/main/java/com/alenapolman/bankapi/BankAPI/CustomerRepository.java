// This interface extends the MongoRepository interface provided by Spring Data MongoDB. 
// It allows for CRUD operations on the Customer collection in the MongoDB database. 
// The findByName and findByEmail methods are custom query methods that allow for searching 
// customers by their name or email address, respectively.

package com.alenapolman.bankapi.BankAPI;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    List<Customer> findByName(String name);
    List<Customer> findByEmail(String email);
}