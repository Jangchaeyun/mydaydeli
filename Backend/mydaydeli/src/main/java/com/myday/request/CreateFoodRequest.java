package com.myday.request;

import com.myday.model.Category;
import com.myday.model.IngredientsItem;

import java.util.List;

public class CreateFoodRequest {
    private String name;
    private String description;
    private Long price;

    private Category category;
    private List<String> images;

    private Long restaurantId;
    private boolean vegetarian;
    private boolean seasional;
    private List<IngredientsItem> ingredients;
}
