require 'date'
class InterviewsController < ApplicationController
	def new
		@interview = Interview.new
	end
	def show
    @interview = Interview.find(params[:id])
    @interview_participants = InterviewParticipant.where(interview_id: params[:id])
  end

  def edit
    @interview = Interview.find(params[:id])
  end

  def delete
    @interview = Interview.find(params[:id])
    @interview.destroy

    redirect_to home_index
  end

  def create
    @pass = 1
		@start_time = DateTime.new(params["interview"][:"start_time(1i)"].to_i,params["interview"][:"start_time(2i)"].to_i,params["interview"][:"start_time(3i)"].to_i,params["interview"][:"start_time(4i)"].to_i,params["interview"][:"start_time(5i)"].to_i,0)
		@end_time = DateTime.new(params["interview"][:"end_time(1i)"].to_i,params["interview"][:"end_time(2i)"].to_i,params["interview"][:"end_time(3i)"].to_i,params["interview"][:"end_time(4i)"].to_i,params["interview"][:"end_time(5i)"].to_i,0)

		participants = params["participants"].split(",")

    @pass = Interview.check_clash(@start_time, @end_time, participants)

    if @pass == 1
      @interview = Interview.create(start_time: @start_time,end_time: @end_time)
      
      participants.each do |participant|
        interview_participants = InterviewParticipant.create(interview_id: @interview.id, participant_id: participant)
        # InterviewParticipantMailer.welcome_email(interview_participants).deliver_now
      end
      puts(@pass)
      redirect_to interview_url(@interview.id)
    else
      redirect_to new_interview_url()
    end
  end
  
  def update
    @pass = 1
		@start_time = DateTime.new(params["interview"][:"start_time(1i)"].to_i,params["interview"][:"start_time(2i)"].to_i,params["interview"][:"start_time(3i)"].to_i,params["interview"][:"start_time(4i)"].to_i,params["interview"][:"start_time(5i)"].to_i,0)
		@end_time = DateTime.new(params["interview"][:"end_time(1i)"].to_i,params["interview"][:"end_time(2i)"].to_i,params["interview"][:"end_time(3i)"].to_i,params["interview"][:"end_time(4i)"].to_i,params["interview"][:"end_time(5i)"].to_i,0)
  
  
		participants = params["participants"].split(",")

    @pass = Interview.check_clash(@start_time, @end_time, participants)
    
    
    if @pass == 1
      @interview = Interview.update(start_time: @start_time,end_time: @end_time)
      participants.each do |participant|
        interview_participants = InterviewParticipant.where(interview_id: params[:id]).update(participant_id: participant)
        @participantt = Participant.where(id: participant).first
        InterviewMailer.reminder_send(@participantt).deliver_now
        # InterviewParticipantMailer.welcome_email(interview_participants).deliver_now
      end
      puts(@pass)
      redirect_to interview_url(@interview.id)
    else
      redirect_to new_interview_url()
    end
  end




  # after_action :reminder_send, only: [:update]
  # def reminder_send
  #   @interview = Interview.find(params[:id])
  #   @interview_participants = InterviewParticipant.where(interview_id: @interview.id)
  #   @interview_participants.each do |interview_participant|
  #       @participant = Participant.find(interview_participant.participant_id)
  #       # mail to: participant.email, subject: "Your interview is updated", from: 'abc@gmail.com'
  #       puts(@participant)
  #       InterviewMailer.reminder_send(@participant).deliver_now
        
  #   end
  #   # @interview_participants = InterviewParticipant.where(interview_id: params[:id])
  # end

end