class InterviewMailer < ApplicationMailer
    def reminder_send(participant)
        @participant = participant
        puts(participant)
        puts('dgashj')
        # puts(@participant.name)
        mail to: @participant.email, subject: "Your interview is updated", from: 'abc@gmail.com'
    end

    def remind_mail(interview)
        @interview_participants = InterviewParticipant.where(interview_id: interview)
        @interview_participants.each do |interview_participant|
            @participant = Participant.find(interview_participant.participant_id)
            mail to: @participant.email, subject: "Your interview is in 30 minutes", from: 'abc@gmail.com'
        end

    end
end
