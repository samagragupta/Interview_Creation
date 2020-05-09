# Preview all emails at http://localhost:3000/rails/mailers/interview_mailer
class InterviewMailerPreview < ActionMailer::Preview
    def reminder_send
        interview = Interview.last
        puts('gbjfsdjbfsdb interview')
        puts(interview)
        puts(interview = Interview.last)
        InterviewMailer.reminder_send(interview)
    end
end
