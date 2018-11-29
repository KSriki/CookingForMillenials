class StepIngredientSerializer < ActiveModel::Serializer
  attributes :id,  :amount, :recipe_step_id, :ingredient_id
  belongs_to :ingredient
end
