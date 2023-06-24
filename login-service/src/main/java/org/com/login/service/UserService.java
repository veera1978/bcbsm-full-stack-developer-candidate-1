package org.com.login.service;
import org.com.login.entity.User;
import org.com.login.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
/*import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;*/
import org.springframework.stereotype.Service;

@Service
//@EnableWebSecurity
public class UserService {
	
	/*
	 * @Autowired private PasswordEncoder passwordEncoder;
	 */

    @Autowired
  private UserRepository userRepository;

	/*
	 * @Autowired private BCryptPasswordEncoder passwordEncoder;
	 */

    public void insertUser(String username, String password) {
     //  String encodedPassword = passwordEncoder.encode(password);
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        userRepository.save(user);
    }
    
    public boolean authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }
}
