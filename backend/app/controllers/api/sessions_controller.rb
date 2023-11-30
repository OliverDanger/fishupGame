class Api::SessionsController < ApplicationController
  def create
    user = User.find_by(username: session_params[:username])

    if user && user.authenticate(session_params[:password])
      # Successful login
      session[:user_id] = user.id
      render json: { user: user, message: 'Login successful'}, status: :ok
    else
      # Failed login
      render json: { message: 'Invalid username or password'}, status: :unauthorized
    end
  end

  def destroy
    if current_user
      # Logout the current user
      session[:user_id] = nil
      render json: { message: 'Logout successful'}, status: :ok
    else
      # No user logged in
      render json: { message: 'No user logged in'}, status: :unprocessable_entity
    end
  end

  private

  def session_params
    params.permit(:username, :password)
  end
end