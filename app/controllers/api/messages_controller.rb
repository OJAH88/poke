class Api::MessagesController < ApplicationController

    def create
        message = Message.create!(message_params)
        render json: message, status: :created
    end

    def show
        message = Message.find(params[:id])
        render json: message
    end

    private

    def message_params
        params.permit(:content, :friendship_id)
    end


end
