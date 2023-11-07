class RemoveImgAndAddResultItemIdToRecipes < ActiveRecord::Migration[7.0]
  def change
    remove_column :recipes, :img
    remove_column :recipes, :consumable
    add_column :recipes, :result_item_id, :integer
  end
end
