package com.alenapolman.BankAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class BankApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BankApiApplication.class, args);

		// ConfigurableApplicationContext context = SpringApplication.run(BankApiApplication.class, args);

		// System.out.println("=== DEBUG ===");
		// System.out.println("System.getenv: " + System.getenv("MONGODB_URI"));
		// System.out.println("Environment property: " + context.getEnvironment().getProperty("MONGODB_URI"));
		// System.out.println("Resolved mongo uri: " + context.getEnvironment().getProperty("spring.data.mongodb.uri"));
		// System.out.println("=============");
	}

}
