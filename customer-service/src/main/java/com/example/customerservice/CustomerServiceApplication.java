package com.example.customerservice;

import com.example.customerservice.config.CustomerConfigParams;
import com.example.customerservice.repository.CustomerRepository;
import com.example.customerservice.entities.Customer; // make sure this import matches your package
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableConfigurationProperties(CustomerConfigParams.class)
public class CustomerServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CustomerServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(CustomerRepository customerRepository) {
        return args -> {
            customerRepository.save(
                    Customer.builder()
                            .name("Mohamed")
                            .email("med@gmail.com")
                            .build()
            );
            customerRepository.save(
                    Customer.builder()
                            .name("imane")
                            .email("imane@gmail.com")
                            .build()
            );
            customerRepository.save(
                    Customer.builder()
                            .name("yassine")
                            .email("yassine@gmail.com")
                            .build()
            );
            customerRepository.findAll().forEach(c->{
                System.out.println("=====================");
                System.out.println(c.getId());
                System.out.println(c.getName());
                System.out.println(c.getEmail());
                System.out.println("==============");
            });
        };
    }
}
