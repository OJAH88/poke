class UserSerializer < ActiveModel::Serializer
  attributes :id, :password_digest, :name, :age, :friends_count, :pokes_count, :posts_count, :city, :statebio, :hobbies, :likes
end
