class ThreeColourClothingArticles < ActiveRecord::Migration[7.0]
  def change
    remove_column :clothing_articles, :colour, :string
    remove_column :clothing_articles, :accent_colour, :string

    add_column :clothing_articles, :colour_part1, :string
    add_column :clothing_articles, :colour_part2, :string
    add_column :clothing_articles, :colour_part3, :string
  end
end