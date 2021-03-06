class MessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast(
      ("chat-#{message.conversation_id}"),
      payload: ActiveSupport::JSON.decode(render_message(message))
    )
  end

  private

  def render_message(message)
    ApplicationController.render(
      partial: 'api/messages/action_message',
      locals: { message: message }
    )
  end
end
