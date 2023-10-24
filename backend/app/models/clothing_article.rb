class ClothingArticle < ApplicationRecord

  validates :name, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 500 }
  validates :colour, presence: true, inclusion: { in: %w(peach cherry orange lemon lime pine sky ocean lavender grape cloud space slate chestnut), message: "%{value} is not a valid colour" }
  validates :fancy, numericality: true
  validates :cool, numericality: true
  validates :eccentric, numericality: true
  validates :camouflage, numericality: true
  validate :at_least_one_clothing_location

  private

  def at_least_one_clothing_location
    unless hat || face_upper || face_lower || neck || body_upper || body_lower || arm_upper || arm_lower || hand_left || hand_right || jacket || legs_upper || legs_lower || socks || shoes
      errors.add(:base, "At least one clothing item location must be true")
    end
  end
end