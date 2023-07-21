class AddJacketToClothingArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :clothing_articles, :jacket, :boolean
  end
end
