class Tile < ApplicationRecord
  
  validates :x, :y, :type_number, presence: true
  validates :x, :y, :type_number, numericality: { only_integer: true }

end