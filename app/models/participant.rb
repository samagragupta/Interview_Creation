class Participant < ApplicationRecord
    has_many :interview_participants, dependent: :destroy
    has_many :interview, through: :interview_participants

    def self.create_participant(participant_params)
        return Participant.new(participant_params)
        
    end
end
