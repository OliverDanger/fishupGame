class AddNumberOwnedToOwnedArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :owned_articles, :number_held, :integer
  end
end
