class OwnedArticle < ApplicationRecord
  belongs_to :user
  belongs_to :clothing_article

  validates :user_id, presence: true
  validates :clothing_article_id, presence: true

end