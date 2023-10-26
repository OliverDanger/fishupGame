class AddArmsToOutfits < ActiveRecord::Migration[7.0]
  def change
    add_column :outfits, :arms_upper, :boolean
    add_column :outfits, :arms_lower, :boolean
  end
end
