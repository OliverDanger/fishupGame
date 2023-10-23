class AddUpperAndLowerArmToClothingArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :clothing_articles, :arm_upper, :boolean
    add_column :clothing_articles, :arm_lower, :boolean
  end
end
