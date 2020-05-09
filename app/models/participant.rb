class Participant < ApplicationRecord
    has_many :interview_participants, dependent: :destroy
    has_many :interview, through: :interview_participants
end
