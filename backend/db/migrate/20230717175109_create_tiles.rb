class CreateTiles < ActiveRecord::Migration[7.0]
  def change
    create_table :tiles do |t|
      t.integer :x
      t.integer :y
      t.integer :type_number

      t.timestamps
    end
  end
end
