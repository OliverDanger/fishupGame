class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true, length: { maximum: 36, minimum: 3}, allow_nil: false
  validates :password_digest, length: { minimum: 8 }
  validates :x_coordinate, numericality: { only_integer: true }
  validates :y_coordinate, numericality: { only_integer: true }

  has_many :owned_articles
  has_many :clothing_articles, through: :owned_articles
end