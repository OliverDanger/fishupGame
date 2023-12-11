class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: session_params[:username])
    if @user && @user.authenticate(session_params[:password])
      # Successful Login
      login!
      render json: {
        logged_in: true,
        user: @user
      }
    else
      # Unsuccessful Login
      render json: {
        status: 401,
        errors: ['Incorrect username or password. Please try again.']
      }
    end
  end

  def is_logged_in?
    if logged_in? && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
  end

  def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end

end