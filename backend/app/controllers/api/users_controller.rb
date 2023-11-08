class Api::UsersController < ApplicationController
  def get_user_info
    @user = User.find_by(username: params[:username])

    if @user
      render json: @user
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def index 
    @user = User.find(params[:id])
    if @user
      render json: @user
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def get_user_clothes
    # get the users currently worn clothes and then get their details
    @user = User.find(params[:id])
    @clothing_ids = @user.clothes

    if @clothing_ids.present?
      @clothing_details = ClothingArticle.where(id: @clothing_ids)
      render json: @clothing_details
    else
      render json: { message: "User is nude." }, status: :ok
    end
  end

  def get_user_wardrobe
    # get all the users owned clothes and then their details
    @owned_clothing_ids = OwnedArticle.where(user_id: params[:id]).pluck(:clothing_article_id)

    if @owned_clothing_ids.present? 
      @owned_clothing_details = ClothingArticle.where(id: @owned_clothing_ids)
      render json: @owned_clothing_details
    else
      render json: { message: "User has no clothes."}, status: :ok
    end
  end

end