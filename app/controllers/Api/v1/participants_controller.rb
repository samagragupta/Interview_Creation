class Api::V1::ParticipantsController < ApplicationController
    protect_from_forgery with: :null_session
    def index
        @participant = Participant.all
        render json: @participant
    end

    def show
        @participant = Participant.find(params[:id])
    end

    def create
        @participant = Participant.create(participant_params)
        render json: @participant
        
        # redirect_to participant_url(@participant.id)
    end


    private
    def participant_params
        params.require(:participant).permit(:name, :email)
    end
end
