package com.alenapolman.BankAPI;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedDatabase(UserRepository repository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new User(
                    "alena.polman", passwordEncoder.encode("password123"), "alena@example.com",
                    Role.CUSTOMER, 5000.00, "Checking"
                ));
                repository.save(new User(
                    "john.smith", passwordEncoder.encode("password123"), "john@example.com",
                    Role.CUSTOMER, 12500.50, "Savings"
                ));
                repository.save(new User(
                    "admin.user", passwordEncoder.encode("adminpass123"), "admin@example.com",
                    Role.ADMIN, 0.00, "N/A"
                ));
            }
        };
    }
}
