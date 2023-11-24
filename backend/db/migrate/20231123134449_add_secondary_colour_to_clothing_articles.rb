class AddSecondaryColourToClothingArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :clothing_articles, :accent_colour, :string
  end
end
