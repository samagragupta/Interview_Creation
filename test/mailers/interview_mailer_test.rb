require 'test_helper'

class InterviewMailerTest < ActionMailer::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "reminder_send" do
    mail = InterviewMailer.reminder_send
    assert_equal "New interview", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end
end
