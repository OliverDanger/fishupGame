class CreateInventory < ActiveRecord::Migration[7.0]
  def change
    create_table :inventories do |t|
      t.integer :item_id
      t.integer :user_id
      t.integer :number_held

      t.timestamps
    end

    add_index :inventories, :user_id
  end
end
