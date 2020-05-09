class Interview < ApplicationRecord
    has_many :interview_participants, dependent: :destroy
    has_many :participants, through: :interview_participants
end
