class AllItems < ActiveRecord::Migration[7.0]
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

# The types supported by Active Record are :primary_key, :string, :text, :integer, :float, :decimal, :datetime, :timestamp, :time, :date, :binary, :boolean.