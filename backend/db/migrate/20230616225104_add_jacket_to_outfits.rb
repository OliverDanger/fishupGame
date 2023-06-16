class AddJacketToOutfits < ActiveRecord::Migration[7.0]
  def change
    add_column :outfits, :jacket, :integer
  end
end
