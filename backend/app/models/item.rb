class Item < ApplicationRecord

  validates :name, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 500 }
  validates :melting_point, presence: true, numericality: true
  validates :base_value, presence: true, numericality: true
  validates :weight, presence: true, numericality: true
  validate :at_least_one_gathering_style

  private

  def at_least_one_gathering_style
    unless magnetic || hookable || netable
      errors.add(:base, "At least one item gathering style must be possible")
    end
  end

  has_many :inventories
  has_many :users, through: :inventories
end