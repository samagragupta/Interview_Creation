class HomeController < ApplicationController
    def index
        @interviews = Interview.order(:id)
        @participants = Participant.order(:id)
    end
end
