class OwnedArticle < ApplicationRecord
  validates :user_id, presence: true
  validates :clothing_article_id, presence: true
  validates :number_held, presence: true

  belongs_to :user
  belongs_to :clothing_article
end