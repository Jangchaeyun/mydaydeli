package com.myday.repository;

import com.myday.model.Cart;
import com.myday.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

}
