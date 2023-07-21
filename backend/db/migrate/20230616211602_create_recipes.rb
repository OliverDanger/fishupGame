class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :img
      t.text :description
      t.boolean :consumable, default: false
      t.integer :item_1
      t.integer :item_2
      t.integer :item_3
      t.integer :item_4
      t.integer :item_5

      t.timestamps
    end
  end
end
