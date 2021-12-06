class User < ApplicationRecord
    has_secure_password

    has_many :friendships
    has_many :posts
    has_many :pokes
    has_many :messages, through: :friendships

    

    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
end
