class Outfit < ApplicationRecord
  validates :name, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 500 }
  validate :at_least_one_clothing_location

  private

  def at_least_one_clothing_location
    unless hat || face_upper || face_lower || neck || body_upper || body_lower || arm_upper || arm_lower || hand_left || hand_right || jacket || legs_upper || legs_lower || socks || shoes
      errors.add(:base, "At least one clothing item location must be true")
    end
  end

  has_many :clothing_articles
  has_many :users
end