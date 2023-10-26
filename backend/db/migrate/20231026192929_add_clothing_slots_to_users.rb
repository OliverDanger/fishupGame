class AddClothingSlotsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :hat, :integer
    add_column :users, :face_upper, :integer
    add_column :users, :face_lower, :integer
    add_column :users, :neck, :integer
    add_column :users, :body_upper, :integer
    add_column :users, :body_lower, :integer
    add_column :users, :arms_upper, :integer
    add_column :users, :arms_lower, :integer
    add_column :users, :hand_left, :integer
    add_column :users, :hand_right, :integer
    add_column :users, :legs_upper, :integer
    add_column :users, :legs_lower, :integer
    add_column :users, :socks, :integer
    add_column :users, :shoes, :integer
    add_column :users, :jacket, :integer
  end
end
