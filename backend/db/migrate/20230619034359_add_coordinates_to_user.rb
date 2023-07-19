class AddCoordinatesToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :x_coordinate, :integer
    add_column :users, :y_coordinate, :integer

  end
end
