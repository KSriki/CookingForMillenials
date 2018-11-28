# CookingForMillenials

Khazana by Srikant Kumar Kalaputapu

Alternative Name: 
Cooking for Millenials

THOUGHTS:

QUESTION:
Did too many db backend tables and worried about sideloading instead of one at a time. Now i realize i do need redux and i have no backend to support the front end.
POSITIVE OUTCOME:
Realized i really do need redux since i dont want to sideload everything all at once due to multiple components having partial information - aka lots of props otherwise.

Rushing is bad but we learn from it!


Tests for code
-> in general, immediate payoff
-> JUNIT or general
-> create-react-app has JEST test framework
-> ENZYME -> snapshot testing enzyme makes it for you! a snapshot 
Cooking For Millenials by Srikant Kumar Kalaputapu

Focus: React with slideable library (mobile first) and build basics for table

Project end date for features - December 5th, presentations are December 7th, 2018

COMPONENT HIERARCHY:

App
   - Navbar
       -Search
   - MainContainer
       - Login
       - Profile
           -MyRecipes
               -RecipeList
                   -RecipeItem
               -RecipeForm
                   -Ingredients
                   -Directions
                   -Image - optional or part of directions
       - RecipeCatalog
           -RecipeCard
               -RecipeShow

SCHEMA

Users
Recipes HAS MANY R-S
Recipe-Steps HAS MANY S-I
   -step number
   -instructions
   -image
Steps-Ingredients (joiner)
   -amount
Ingredients HAS MANY S-I
   -type
   -name
Cooking utensils ???




ROUTES

resources :recipes
 resources :ingredients, only: [:create,:show, :index]
 resources :recipe_steps, only: [:create, :show, :index]
 resources :step_ingredients, only: [:create, :show, :index]
 resources :users, only: [:create]
 post '/login', to: 'auth#create'
 get '/profile', to: 'users#profile'

Ingredients need to be sideloaded with step_ingredients?

Status 

ToDo:

Signup page

Components for Recipe
One at a time for the Form

Index for a user recipes:
RecipeList
RecipeItem

SideLoad Serializing for Recipe

Cooking utensils??

Completed:

User
Auth
Login
Recipe
Recipe_Step
Step_Ingredient
Ingredient
Seed data
Added data validation
Serializers for tables
Sideload the data for recipe

In-Progress:
Add Redux - earlier the better

Create routes for each of the models

Index to get all

Or show for specifics ?

Routes


Stretch features:
Image upload per step - CarrierWave https://medium.com/@jakeberman_97785/image-uploading-with-a-react-frontend-64ee2cc9b33d
Email 2 factor auth?
Search feature
Gamify for learning ?
Standardized form language NLP for recipes?
Redux? - multiple redux stuff for state - reused
Expand button for the ingredients

Notes:
Build vertical - db then front end
Build Feature by Feature since we have to deal with people.
Dont really need redux except maybe for search feature
Dont need full CRUD
Social media sharing
Slideable and mobile first


Issues:
No sideloading for recipes since:

Recipe info for just stub/cards

Recipe Show Pages need:
Recipe, Recipe-Steps, Step-Ingredients and Ingredients

Recipe-step has many ingredients through

Recipe-step, step-ingredient and ingredient need to be sideloaded together
Recipe-step is the main db

Can either do: 
Recipe step has many S-I and has I  many through S-I

Or: chain has manys - not working huh

