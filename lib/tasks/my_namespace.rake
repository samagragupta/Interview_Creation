require 'rake'
namespace :my_namespace do
  desc 'Sending mail'
  task :send_mail => :environment do
    interviews = Interview.order(id: :asc)
    current_time = Time.now
    interviews.each do |interview|
      if current_time + 2100 > interview.start_date > current_time + 1800
        InterviewMailer.remind_mail(interview.id).deliver
      end
    end
  end
end