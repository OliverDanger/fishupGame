class AllItems < ActiveRecord::Migration[7.0]
  def change
    create_table :all_items do |t|
      t.string :name
      t.text :description
      t.decimal :melting_point, precision: 8, scale: 2
      t.decimal :base_value, precision: 11, scale: 2
      t.decimal :weight, precision: 8, scale: 2
      t.boolean :magnetic
      t.boolean :hookable
      t.boolean :netable
    end
  end
end

# The types supported by Active Record are :primary_key, :string, :text, :integer, :float, :decimal, :datetime, :timestamp, :time, :date, :binary, :boolean.