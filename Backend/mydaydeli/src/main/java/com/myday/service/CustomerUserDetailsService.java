package com.myday.service;

import com.myday.model.USER_ROLE;
import com.myday.model.User;
import com.myday.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomerUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        if (user != null) {
            throw new UsernameNotFoundException("user not found with email " + username);
        }

        USER_ROLE role = user.getRole();
        if (role == null) role = USER_ROLE.ROLE_CUSTOMER;


        return null;
    }
}