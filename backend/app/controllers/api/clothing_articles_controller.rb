class Api::ClothingArticlesController < ApplicationController
  def index

    if params[:ids].present?
      @clothing_articles = ClothingArticle.where( id: params[:ids])
    else
      @clothing_articles = ClothingArticle.all
    end


    if @clothing_articles.any?
      render json: @clothing_articles, status: :ok
    else
      render json: { message: 'No clothing articles found'}, status: :not_found
    end
  end
end