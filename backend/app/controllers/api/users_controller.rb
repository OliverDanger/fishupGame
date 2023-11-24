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

  def set_user_clothes
    @user = User.find(params[:id])
  
    if @user.update(clothes: params[:clothes])
      render json: { message: "User's clothes updated successfully." }, status: :ok
    else
      render json: { error: "Failed to update user's clothes." }, status: :unprocessable_entity
    end
  end
  

  def get_user_wardrobe
    # Get all the user's owned clothes and their details
    @owned_clothing = OwnedArticle.includes(:clothing_article).where(user_id: params[:id])
  
    if @owned_clothing.present? 
      @wardrobe_details = @owned_clothing.map do |owned_article|
        {
          id: owned_article.clothing_article.id,
          name: owned_article.clothing_article.name,
          description: owned_article.clothing_article.description,
          colour_part1: owned_article.clothing_article.colour_part1,
          colour_part2: owned_article.clothing_article.colour_part2,
          colour_part3: owned_article.clothing_article.colour_part3,
          fancy: owned_article.clothing_article.fancy,
          cool: owned_article.clothing_article.cool,
          eccentric: owned_article.clothing_article.eccentric,
          camouflage: owned_article.clothing_article.camouflage,
          set: owned_article.clothing_article.set,
          img: owned_article.clothing_article.img,
          category: owned_article.clothing_article.category,
          number_held: owned_article.number_held
        }
      end
      render json: @wardrobe_details
    else
      render json: { message: "User has no clothes." }, status: :ok
    end
  end
  

end