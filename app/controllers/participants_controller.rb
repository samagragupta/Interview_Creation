class ParticipantsController < ApplicationController
    def index
		@participant = Participant.new
    end

    def show
        @participant = Participant.find(params[:id])
    end

    def create
		@participant = Participant.create(participant_params)
        redirect_to participant_url(@participant.id)
    end


    private
    def participant_params
        params.require(:participant).permit(:name, :email)
    end
end
