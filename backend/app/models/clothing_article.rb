class ClothingArticle < ApplicationRecord
  VALID_COLORS = %w(peach watermelon cherry apple orange lemon lime pine sky ocean trench grape blueberry cloud space slate bread toast)

  validates :name, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 500 }
  validates :colour_part1, presence: true, inclusion: { in: VALID_COLORS, message: "%{value} is not a valid colour" }
  validates :colour_part2, presence: true, inclusion: { in: VALID_COLORS, message: "%{value} is not a valid colour" }, allow_nil: true
  validates :colour_part3, presence: true, inclusion: { in: VALID_COLORS, message: "%{value} is not a valid colour" }, allow_nil: true
  validates :category, presence: true, inclusion: { in: %w(hat glasses face neckwear shirt jacket wristwear gloves shorts pants socks shoes)}
  validates :fancy, numericality: true
  validates :cool, numericality: true
  validates :eccentric, numericality: true
  validates :camouflage, numericality: true

  has_many :owned_articles
  has_many :users, through: :owned_articles
end