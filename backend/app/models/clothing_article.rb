class ClothingArticle < ApplicationRecord

  validates :name, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 500 }
  validates :colour, presence: true, inclusion: { in: %w(peach watermelon cherry apple orange lemon lime pine sky ocean trench grape blueberry cloud space slate bread toast), message: "%{value} is not a valid colour" }
  validates :category, presence: true, inclusion: { in: %w(hat glasses face neckwear shirt jacket wristwear gloves shorts pants socks shoes)}
  validates :fancy, numericality: true
  validates :cool, numericality: true
  validates :eccentric, numericality: true
  validates :camouflage, numericality: true

  has_many :owned_articles
  has_many :users, through: :owned_articles
end