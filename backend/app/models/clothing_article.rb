class ClothingArticle < ApplicationRecord

  validates :name, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 500 }
  validates :colour, presence: true, inclusion: { in: %w(peach cherry orange lemon lime pine sky ocean lavender grape cloud space slate chestnut), message: "%{value} is not a valid colour" }
  validates :fancy, numericality: true
  validates :cool, numericality: true
  validates :eccentric, numericality: true
  validates :camouflage, numericality: true

end