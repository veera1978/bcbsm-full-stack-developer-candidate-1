package org.com.login;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
/*import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
*/

@SpringBootApplication
//@EnableWebSecurity
@ComponentScan(basePackages ={"org.com.login.service", "org.com.login.repository", "org.com.login.controller",
		"org.springframework.security.crypto.bcrypt",
		"org.springframework.security.crypto.password"})
public class LoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginApplication.class, args);
	}

}

