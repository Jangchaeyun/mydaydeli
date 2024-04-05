package com.myday.controller;

import com.myday.config.JwtProvider;
import com.myday.model.User;
import com.myday.repository.CartRepository;
import com.myday.repository.UserRepository;
import com.myday.response.AuthResponse;
import com.myday.service.CustomerUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private CustomerUserDetailsService customerUserDetailsService;
    @Autowired
    private CartRepository cartRepository;

    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) {

    }
}
