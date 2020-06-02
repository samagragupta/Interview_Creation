require 'date'
class Api::V1::InterviewsController < ApplicationController
  # protect_from_forgery with: :null_session
  # protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
  # skip_before_filter :verify_authenticity_/token 
  # skip_before_action :verify_authenticity_token

  def index
    @interview = Interview.all
    
    render json: @interview
	end
	# def new
	# 	@interview = Interview.new
	# end
	def show
    @interview = Interview.find(params[:id])
    interview_participants = InterviewParticipant.where(interview_id: params[:id])
    # render json: @interview , include: :interview_participants
    render json: interview_participants
  end

  def edit
    @interview = Interview.find(params[:id])
  end

  def destroy
    @interview_participants = InterviewParticipant.where(interview_id: params[:id]).destroy_all
    @interview = Interview.find(params[:id]).destroy
    # @interview_participants.destroy(params[:id])
    # @interview.destroy(params[:id])

    render json: @interview
    # redirect_to home_index
  end


  # def create 
  #   @interview = Interview.create(interview_params)

  #   render json: @interview
  # end

  def create
    @pass = 1
		# @start_time = DateTime.new(params["interview"][:"start_time(1i)"].to_i,params["interview"][:"start_time(2i)"].to_i,params["interview"][:"start_time(3i)"].to_i,params["interview"][:"start_time(4i)"].to_i,params["interview"][:"start_time(5i)"].to_i,0)
		# @end_time = DateTime.new(params["interview"][:"end_time(1i)"].to_i,params["interview"][:"end_time(2i)"].to_i,params["interview"][:"end_time(3i)"].to_i,params["interview"][:"end_time(4i)"].to_i,params["interview"][:"end_time(5i)"].to_i,0)
  
    @start_time =  params[:start_time]
    @end_time =  params[:end_time]
	  participants = params[:participants].split(",")
    participant_interviews = []
    participant_interview_times = []
    participants.each do |participant|
      participant_interviews+=(InterviewParticipant.where(participant_id: participant))
    end  
    participant_interviews.each do |participant_interview|
      puts(participant_interview.interview_id)
      participant_interview_en = Interview.find(participant_interview.interview_id)
      participant_interview_times.push([participant_interview_en.start_time,participant_interview_en.end_time])
    end
    
    puts participant_interview_times.map { |x| x.join(' ') }
    
    participant_interview_times.each do |x|
      if x[1]<@start_time
      elsif x[0]>@end_time
      else
        puts("error")
        @pass = 0
      end
    end
    
    
    if @pass == 1
      @interview = Interview.create(start_time: @start_time,end_time: @end_time)
      
      participants.each do |participant|
        interview_participants = InterviewParticipant.create(interview_id: @interview.id, participant_id: participant)
        # InterviewParticipantMailer.welcome_email(interview_participants).deliver_now
      end
      puts(@pass)
      render json: @interview
      # redirect_to interview_url(@interview.id)
    else      
      render json: { render json: @interview.errors, status: :unprocessable_entity }
    end
  end
  
  def update
    @pass = 1
    @start_time =  params[:start_time]
    @end_time =  params[:end_time]
		participants = params[:participants].split(",")
    participant_interviews = []
    participant_interview_times = []
    participants.each do |participant|
      participant_interviews+=(InterviewParticipant.where(participant_id: participant))
    end  
    participant_interviews.each do |participant_interview|
      puts(participant_interview.interview_id)
      participant_interview_en = Interview.find(participant_interview.interview_id)
      participant_interview_times.push([participant_interview_en.start_time,participant_interview_en.end_time])
    end
    
    puts participant_interview_times.map { |x| x.join(' ') }
    
    participant_interview_times.each do |x|
      if x[1]<@start_time
      elsif x[0]>@end_time
      else
        puts("error hai")
        @pass = 0
      end
    end
    
    
    
    if @pass == 1
      @interview = Interview.update(start_time: @start_time,end_time: @end_time)
      puts("jhdsavdvsauasuidadusadgas")
      puts(@interview)
      participants.each do |participant|
        @interview_participants = InterviewParticipant.where(interview_id: params[:id])
        puts(@interview_participants)
        puts("inter part")
        puts(InterviewParticipant.where(interview_id: params[:id]))
        interview_participants = InterviewParticipant.where(interview_id: params[:id]).update(participant_id: participant)
        @participantt = Participant.where(id: participant).first
        puts("21321hhgbjh")
        p(@participantt = Participant.where(id: 1).first)
        p(@participantt.email)
        InterviewMailer.reminder_send(@participantt).deliver_now
        puts('abcdef')
        puts(participant.errors.full_messages)
        # InterviewParticipantMailer.welcome_email(interview_participants).deliver_now
      end
      puts(@pass)
      redirect_to interview_url(@interview.id)
    else
      redirect_to new_interview_url()
    end
  end


  private
  def interview_params
      params.require(:interview).permit(:start_time, :end_time)
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