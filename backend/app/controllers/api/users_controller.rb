class UsersController < ApplicationController
  def get_user_info
    @user = User.find_by(username: params[:username])

    if @user
      render json: @user
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end
end
