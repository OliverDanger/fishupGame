class Recipe < ApplicationRecord
  validates :name, presence: true, length: { maximum: 100 }
  validates :description, presence: true, length: { maximum: 500 }
  validates :img, presence: true, length: { maximum: 500 }
  validates item_2: presence: true
  validates item_3: presence: true
  validates item_4: presence: true
  validates item_5: presence: true
  validates item_1: presence: true
  
end