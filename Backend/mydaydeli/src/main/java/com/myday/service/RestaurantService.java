package com.myday.service;

import com.myday.model.Restaurant;
import com.myday.model.User;
import com.myday.request.CreateRestaurantRequest;

public interface RestaurantService {
    public Restaurant createRestaurant(CreateRestaurantRequest req, User user);
}
