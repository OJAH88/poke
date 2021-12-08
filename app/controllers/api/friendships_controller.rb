class FriendshipsController < ApplicationController

  def create
    friendship = Friendship.create!(friendship_params)
    render json: friendship, status: :created
    friendship.save!
  end

  def show
    friendship = Friendship.find(friendship_params)
    render json: friendship
  end

  def destroy
    friendship = Friendship.find(friendship_params)
    friendship.destroy 
    head :no_content
  end

  private

  def friendship_params
    params.permit(:user_id, :friend_id, :confirmed)
  end

   
end