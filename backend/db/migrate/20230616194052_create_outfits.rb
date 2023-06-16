class CreateOutfits < ActiveRecord::Migration[7.0]
  def change
    create_table :outfits do |t|
      t.integer :user_id

      t.integer :hat
      t.integer :face_upper
      t.integer :face_lower
      t.integer :neck
      t.integer :body_upper
      t.integer :body_lower
      t.integer :hand_left
      t.integer :hand_right
      t.integer :legs_upper
      t.integer :legs_lower
      t.integer :socks
      t.integer :shoes

      t.timestamps
    end

    add_index :outfits, :user_id
  end
end
