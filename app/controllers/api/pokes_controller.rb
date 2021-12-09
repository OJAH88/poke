class Api::PokesController < ApplicationController

    def create
        poke = Poke.create!(poke_params)
        render json: poke, status: :created
    end

    def show
        poke = Poke.find(params[:id])
        render json: poke
    end

    private

    def poke_params
        params.permit(:user_id)
    end

end
