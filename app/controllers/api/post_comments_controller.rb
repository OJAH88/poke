class PostCommentsController < ApplicationController
    def create
        postcomment = Postcomment.create!(postcomment_params)
        render json: postcomment, status: :created
    end

    def show
        postcomment = Postcomment.find(params[:id])
        render json: postcomment
    end

    def update
        postcomment = Postcomment.find(params[:id])
        postcomment.update(postcomment_params)
        render json: postcomment
    end

    def destroy
        postcomment = Postcomment.find(params[:id])
        postcomment.destroy
        head :no_content
    end

    private

    def postcomment_params
        postcomment.permit(:content, :imgurl, :user_id)
    end


end