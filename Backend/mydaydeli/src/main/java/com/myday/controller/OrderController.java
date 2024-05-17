package com.myday.controller;

import com.myday.model.Order;
import com.myday.model.User;
import com.myday.request.OrderRequest;
import com.myday.response.PaymentResponse;
import com.myday.service.OrderService;
import com.myday.service.PaymentService;
import com.myday.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private UserService userService;

    @PostMapping("/order")
    public ResponseEntity<PaymentResponse> createOrder(@RequestBody OrderRequest req,
                                                       @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Order order = orderService.createOrder(req, user);
        PaymentResponse res = paymentService.createPaymentLink(order);
        return new ResponseEntity<>(res, HttpStatus.OK);

    }

    @GetMapping("/order/user")
    public ResponseEntity<List<Order>> getOrderHistory(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Order> orders = orderService.getUserOrder(user.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);

    }
}
