# == Schema Information
#
# Table name: conversation_users
#
#  id              :integer          not null, primary key
#  conversation_id :integer
#  user_id         :integer
#

class ConversationUser < ApplicationRecord
  validates :user_id, :conversation_id, presence: true
  validates :conversation_id, uniqueness: { scope: :user }

  belongs_to :conversation, inverse_of: :conversation_users
  belongs_to :user, inverse_of: :conversation_users

end
