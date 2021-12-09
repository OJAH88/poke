class Api::FriendshipsController < ApplicationController

  def create
    friendship = Friendship.create!(friendship_params)
    render json: friendship, status: :created
    friendship.save!
  end

  def show
    friendship = Friendship.find(friendship_params)
    render json: friendship
  end

  def index
    friendships = Friendship.all
    render json: friendships
  end
  

  def destroy
    friendship = Friendship.find(friendship_params)
    friendship.destroy 
    head :no_content
  end

  private

  def friendship_params
    params.permit(:id)
  end

   
end