class Api::OwnedArticlesController < ApplicationController
  def index
    user = User.find_by(id: params[:user_id])

    if user.nil?
      render json: { error: "User not found "}, status: :not_found
    else
      @owned_clothing = OwnedArticle.where( user_id: user.id)
      
      if @owned_clothing.empty?
        render json: { message: "User owns no clothes" }, status: :ok
      else
        render json: @owned_clothing, status: :ok
      end
    end
  end
end