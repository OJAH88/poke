class UsersController < ApplicationController
    skip_before_action :authorize
  
    def create
      user = User.create!(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
      if current_user
          render json: current_user, status: :ok
      else
          render json: "Not authenticated", status: :unauthorized
      end
    end
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation, :name, :email, :age, :friends_count, :pokes_count, :messages_count, :city, :state, :bio, :hobbies, :likes, :imgurl)
    
    end
  
  end