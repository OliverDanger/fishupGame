class CreateOwnedRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :owned_recipes do |t|
      t.integer :user_id
      t.integer :recipe_id

      t.timestamps
    end
    add_index :owned_recipes, :user_id
  end
end
