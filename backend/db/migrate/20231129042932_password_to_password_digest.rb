class PasswordToPasswordDigest < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :password, :string
    add_column :users, :password_digest, :string, null: false
    add_column :users, :confirmed_at, :datetime
  end
end
