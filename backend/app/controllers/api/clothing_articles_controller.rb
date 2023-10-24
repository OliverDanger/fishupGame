class Api::ClothingArticlesController < ApplicationController
  def index
    clothing_article_ids = params[:ids]
    @clothing_articles = ClothingArticle.where(id: clothing_article_ids)

    if @clothing_articles.any?
      render json: @clothing_articles, status: :ok
    else
      render json: { message: 'No clothing articles found witht he provided IDs'}, status: :not_found
    end
  end
end