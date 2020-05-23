class Interview < ApplicationRecord
    has_many :interview_participants, dependent: :destroy
    has_many :participants, through: :interview_participants

    def self.check_clash(start_time, end_time, participants)
        participant_interviews = []
        timming = []
        participants.each do |participant|
        participant_interviews+=(InterviewParticipant.where(participant_id: participant))
        end  
        participant_interviews.each do |participant_interview|
        participant_interviewID = Interview.find(participant_interview.interview_id)
        if participant_interviewID.end_time < Time.now
            next
        end
        timming.push([participant_interviewID.start_time,participant_interviewID.end_time])
        end
        
        timming.each do |x|
        p(x[1])
        p(x[0])
        if x[1]<start_time
        elsif x[0]>end_time
        elsif x[0] > x[1] and x[0] < Time.now
            return 0
        else
            return 0
        end
        end
        return 1
    end
end
