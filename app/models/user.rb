class User < ApplicationRecord
    has_secure_password

    has_many :friendships, dependent: :destroy  
    has_many :friends, through: :friendships
    has_many :posts
    has_many :pokes
    has_many :messages, through: :friendships

    

    validates :email, presence: true, uniqueness: true
    validates :password, presence: true


end
