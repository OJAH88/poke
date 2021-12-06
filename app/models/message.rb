class Message < ApplicationRecord
  belongs_to :friendship

  validates :content, presence: true
end
