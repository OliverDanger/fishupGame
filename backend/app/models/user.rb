class User < ApplicationRecord
  validates :username, presence: true, length: { maximum: 50 }
  validates :password, presence: true, length: { maximum: 50 }
  validates :x_coordinate, numericality: { only_integer: true }
  validates :y_coordinate, numericality: { only_integer: true }
end