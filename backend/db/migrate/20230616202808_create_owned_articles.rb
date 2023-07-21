class CreateOwnedArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :owned_articles do |t|
      t.integer :user_id
      t.integer :clothing_article_id

      t.timestamps
    end

    add_index :owned_articles, :user_id
  end
end
