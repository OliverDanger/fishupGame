class RemoveClothingSlotsFromClothingArticles < ActiveRecord::Migration[7.0]
  def change
    remove_column :clothing_articles, :hat
    remove_column :clothing_articles, :face_lower
    remove_column :clothing_articles, :face_upper
    remove_column :clothing_articles, :neck
    remove_column :clothing_articles, :body_upper
    remove_column :clothing_articles, :body_lower
    remove_column :clothing_articles, :arm_lower
    remove_column :clothing_articles, :arm_upper
    remove_column :clothing_articles, :hand_left
    remove_column :clothing_articles, :hand_right
    remove_column :clothing_articles, :legs_lower
    remove_column :clothing_articles, :legs_upper
    remove_column :clothing_articles, :socks
    remove_column :clothing_articles, :shoes
    remove_column :clothing_articles, :jacket

    add_column :clothing_articles, :category, :string
  end
end
