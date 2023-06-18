class CreateClothingArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :clothing_articles do |t|
      t.string :name
      t.text :description
      t.string :colour
      t.integer :fancy
      t.integer :cool
      t.integer :eccentric
      t.integer :camouflage
      t.boolean :set
      t.boolean :hat
      t.boolean :face_upper
      t.boolean :face_lower
      t.boolean :neck
      t.boolean :body_upper
      t.boolean :body_lower
      t.boolean :hand_left
      t.boolean :hand_right
      t.boolean :legs_upper
      t.boolean :legs_lower
      t.boolean :socks
      t.boolean :shoes

      t.timestamps
    end
  end
end