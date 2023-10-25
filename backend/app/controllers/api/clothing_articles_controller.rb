class Api::ClothingArticlesController < ApplicationController
  def index
    # sets clothing_articles to either the specified clothes by their ids, or all clothes if no ids are given
    @clothing_articles = params[:ids].present? ? ClothingArticle.where("id IN (#{params[:ids]})") : ClothingArticle.all

    if @clothing_articles.any?
      render json: @clothing_articles, status: :ok
    else
      render json: { message: 'No clothing articles found'}, status: :not_found
    end
  end
end