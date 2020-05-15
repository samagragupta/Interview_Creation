class Api::V1::InterviewParticipantsController < ApplicationController
  protect_from_forgery with: :null_session
    def show
        interview_participants = InterviewParticipant.where(participant_id: params[:id])
        # render json: @interview , include: :interview_participants
        render json: interview_participants
    end
end
