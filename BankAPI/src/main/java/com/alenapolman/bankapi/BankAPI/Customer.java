package com.alenapolman.bankapi.BankAPI;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "customers")
public class Customer {

    @Id
    private String id;
    private String name;
    private double balance;
    private String email;
    private String accountType;

    public Customer(){}

    public Customer(String name, double balance, String email, String accountType){
        this.name = name;
        this.balance = balance;
        this.email = email;
        this.accountType = accountType;
    }
    
    public String getId(){
        return id;
    }
    
    public void setId(String id){
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public double getBalance(){
        return balance;
    }

    public void setBalance(double balance){
        this.balance = balance;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getAccountType(){
        return accountType;
    }

    public void setAccountType(String accountType){
        this.accountType = accountType;
    }
}
