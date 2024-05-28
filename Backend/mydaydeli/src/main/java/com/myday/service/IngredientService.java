package com.myday.service;

import com.myday.model.IngredientCategory;
import com.myday.model.IngredientsItem;

import java.util.List;

public interface IngredientService {
    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception;

    public IngredientCategory findIngredientCategoryById(Long id) throws Exception;

    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long id) throws Exception;

    public IngredientsItem createIngredientItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception;

    public List<IngredientsItem> findRestaurantIngredients(Long id);

    public IngredientsItem updateStack(Long id) throws Exception;
}
