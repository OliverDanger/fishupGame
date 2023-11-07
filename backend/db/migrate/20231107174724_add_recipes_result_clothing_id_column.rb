class AddRecipesResultClothingIdColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :result_clothing_id, :integer
  end
end
