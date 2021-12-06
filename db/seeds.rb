# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

amy = User.create(username: "TheAmyPosten", password: "test1", name: "Amy Posten", email: "amy@amy.com", age: 21, friends_count: 13432, pokes_count: 1234, messages_count: 1310, city: "", state: "", bio: "", hobbies: "", likes: "", imgurl: "")

jesse = User.create(username: "OJAH", password: "test2", name: "Jesse Harlan", email: "jharlan628@gmail.com", age: 33, friends_count: 3432, pokes_count: 234, messages_count: 310, city: "Brooklyn", state: "New York", bio: " ¯|_(ツ)_|¯ ", hobbies: "Magnets", likes: "Ghouls", imgurl: "https://ojah88.github.io/Good-Doggos/3.jpeg")

jui = User.create(username: "RAY", password: "test3", name: "Jui Hsu", email: "jui@ray.com", age: 21, friends_count: 130432, pokes_count: 12340, messages_count: 11310, city: "", state: "", bio: "(pronounced Ray)", hobbies: "", likes: "", imgurl: "")
