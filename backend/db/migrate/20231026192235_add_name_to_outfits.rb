class AddNameToOutfits < ActiveRecord::Migration[7.0]
  def change
    add_column :outfits, :name, :string
  end
end
