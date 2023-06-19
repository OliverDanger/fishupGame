class AddImgToClothingArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :clothing_articles, :img, :string
  end
end
