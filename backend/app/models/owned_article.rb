class OwnedArticle < ApplicationRecord
  belongs_to :user
  belongs_to :clothing_article
end