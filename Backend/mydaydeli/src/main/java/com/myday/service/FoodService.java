package com.myday.service;

import com.myday.model.Category;
import com.myday.model.Food;
import com.myday.model.Restaurant;
import com.myday.request.CreateFoodRequest;

public interface FoodService {
    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);
}
