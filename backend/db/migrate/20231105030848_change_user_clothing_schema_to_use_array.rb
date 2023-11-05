class ChangeUserClothingSchemaToUseArray < ActiveRecord::Migration[7.0]
  def change
      remove_column :users, :hat
      remove_column :users, :face_upper
      remove_column :users, :face_lower
      remove_column :users, :neck
      remove_column :users, :body_upper
      remove_column :users, :body_lower
      remove_column :users, :arm_upper
      remove_column :users, :arm_lower
      remove_column :users, :hand_left
      remove_column :users, :hand_right
      remove_column :users, :legs_upper
      remove_column :users, :legs_lower
      remove_column :users, :socks
      remove_column :users, :shoes
      remove_column :users, :jacket

      add_column :users, :worn_clothes, :integer, array: true, default: []
    end
  end
end
