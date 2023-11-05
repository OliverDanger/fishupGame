class Outfit < ApplicationRecord
  validates :name, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 500 }

  has_many :clothing_articles
  has_many :users
end