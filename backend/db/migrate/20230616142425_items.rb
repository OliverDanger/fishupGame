class Items < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.decimal :melting_point, precision: 8, scale: 2
      t.decimal :base_value, precision: 11, scale: 2
      t.decimal :weight, precision: 8, scale: 2
      t.boolean :magnetic, default: false
      t.boolean :hookable, default: true
      t.boolean :netable, default: false
    end
  end
end
