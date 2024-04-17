package com.myday.service;

import com.myday.dto.RestaurantDto;
import com.myday.model.Restaurant;
import com.myday.model.User;
import com.myday.request.CreateRestaurantRequest;

import java.util.List;

public interface RestaurantService {
    public Restaurant createRestaurant(CreateRestaurantRequest req, User user);

    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updatedRestaurant) throws Exception;

    public void deleteRestaurant(Long restaurantId) throws Exception;

    public List<Restaurant> getAllRestaurants();

    public  List<Restaurant> searchRestaurant();

    public Restaurant findRestaurantById(Long id) throws Exception;

    public Restaurant getRestaurantByUserId(Long userId) throws Exception;

    public RestaurantDto addToFavorites(Long restaurantId, Long userId) throws Exception;

    public Restaurant updateRestaurantStatus(Long id) throws Exception;
}
