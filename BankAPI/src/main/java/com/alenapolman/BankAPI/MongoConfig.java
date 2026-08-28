package com.alenapolman.BankAPI;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

@Configuration
public class MongoConfig {

    @Value("${MONGODB_URI}")
    private String mongoUri;

    // MongoDB client and template configuration for the BankAPI application using the provided MONGODB_URI environment variable
    @Bean
    public MongoClient mongoClient() {
        return MongoClients.create(mongoUri);
    }

    @Bean
    public MongoTemplate mongoTemplate(MongoClient mongoClient) {
        return new MongoTemplate(mongoClient, "bankdb");
    }//returns MongoTemplate bean which is used to interact with the MongoDB database
}