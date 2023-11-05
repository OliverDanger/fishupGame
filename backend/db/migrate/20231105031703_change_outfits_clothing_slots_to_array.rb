class ChangeOutfitsClothingSlotsToArray < ActiveRecord::Migration[7.0]
  def change
    remove_column :outfits, :hat
    remove_column :outfits, :face_upper
    remove_column :outfits, :face_lower
    remove_column :outfits, :neck
    remove_column :outfits, :body_upper
    remove_column :outfits, :body_lower
    remove_column :outfits, :arms_upper
    remove_column :outfits, :arms_lower
    remove_column :outfits, :hand_left
    remove_column :outfits, :hand_right
    remove_column :outfits, :legs_upper
    remove_column :outfits, :legs_lower
    remove_column :outfits, :socks
    remove_column :outfits, :shoes
    remove_column :outfits, :jacket
    
    add_column :outfits, :clothes, :integer, array: true, default: []

    remove_column :users, :worn_clothes
    add_column :users, :clothes, :integer, array: true, default: []
  end
end
