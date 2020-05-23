class SendEmailsJob < ApplicationJob
  queue_as :default

  def perform(message)
    # Do something later
    InterviewMailer.remind_mail(message).deliver_now
  end
end
