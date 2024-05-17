package com.myday.service;

import com.myday.model.Order;
import com.myday.response.PaymentResponse;
import com.stripe.exception.StripeException;


public interface PaymentService {
    public PaymentResponse createPaymentLink(Order order) throws StripeException;

}
