class AddResumeToParticipants < ActiveRecord::Migration[6.0]
  def change
    add_column :participants, :resume, :text
  end
end
