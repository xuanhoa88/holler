class Conversation < ApplicationRecord

  has_many :messages, -> { order(created_at: :asc) }
  has_many :conversations_users
  has_many :users,
    through: :conversations_users

end
