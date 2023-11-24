# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

## ALL ITEMS

puts "Creating Items..."

Item.destroy_all

items = Item.create!([
  {
    name: "Tuna",
    description: "Classic fish. Tuna can be found anywhere in the bay.",
    melting_point: 35.00,
    base_value: 25.00,
    weight: 3.21,
    magnetic: false,
    hookable: true,
    netable: true,
  },
  {
    name: "Sea Snail",
    description: "They live everywhere and eat everything, some say they even eat eachother!",
    melting_point: 40.00,
    base_value: 0.70,
    weight: 0.25,
    magnetic: false,
    hookable: false,
    netable: true,
  },
  {
    name: "Empty Can",
    description: "An empty can with a worn fishcorp label. The ocean has cleaned it up nicely. It's made of tin but is strangely magnetic...",
    melting_point: 660.32,
    base_value: 0.15,
    weight: 0.66,
    magnetic: true,
    hookable: false,
    netable: true,
  },
  {
    name: "Empty Water Bottle",
    description: "An empty water bottle with a worn fishcorp label. The ocean has cleaned it up nicely. It's made of low quality plastic.",
    melting_point: 255.55,
    base_value: 0.10,
    weight: 0.33,
    magnetic: false,
    hookable: false,
    netable: true,
  },
  {
    name: "Sand",
    description: "It's so fine it feels like dust when it's dry.",
    melting_point: 255.55,
    base_value: 0.10,
    weight: 0.33,
    magnetic: false,
    hookable: false,
    netable: true,
  },
  {
    name: "Sea Glass",
    description: "Shiny and round, it's perfectly smooth all over.",
    melting_point: 255.55,
    base_value: 0.10,
    weight: 0.33,
    magnetic: false,
    hookable: false,
    netable: true,
  }
])

puts "Items created!"

puts "Creating Ocean..."

Tile.destroy_all

# Create the ocean tiles (x: 0-40, y: 0-40)
(0..40).each do |x|
  (0..40).each do |y|
    tile = Tile.find_or_initialize_by(x: x, y: y)
    tile.update!(type_number: 1)  # Ocean tile type
  end
end

puts "Creating Island..."

# Create the smaller island tiles (x: 7-12, y: 7-12)
(7..12).each do |x|
  (7..12).each do |y|
    tile = Tile.find_or_initialize_by(x: x, y: y)
    tile.update!(type_number: 2)  # Sand tile type for the island
  end
end

puts "Map created!"

puts "Creating Clothes..."

ClothingArticle.destroy_all

# available clothing colours: 
# - peach
# - cherry 
# - orange
# - lemon
# - lime
# - pine
# - sky
# - ocean
# - lavender
# - grape
# - cloud
# - space
# - slate
# - chestnut

clothes = ClothingArticle.create!([
  {
    id: 1,
    name: "White T-shirt",
    description: "A cozy and clean white t-shirt",
    colour: "cloud",
    accent_colour: "space",
    fancy: 1,
    cool: 1,
    eccentric: -1,
    camouflage: -1,
    set: nil,
    category:  "shirt",
    img: "basicTshirt",
  },
  {
    id: 2,
    name: "Black T-shirt",
    description: "A cozy and clean black t-shirt",
    colour: "space",
    accent_colour: "cloud",
    fancy: 0,
    cool: 1,
    eccentric: -1,
    camouflage: 1,
    set: nil,
    category:  "shirt",
    img: "basicTshirt",
  },
  {
    id: 3,
    name: "Orange Shorts",
    description: "Those are some orange shorts!",
    colour: "orange",
    accent_colour: "toast",
    fancy: 0,
    cool: 1,
    eccentric: -1,
    camouflage: 1,
    set: nil,
    category:  "shorts",
    img: "basicShorts",
  },
  {
    id: 4,
    name: "Red Socks",
    description: "Cozy socks. They're quite red.",
    colour: "apple",
    accent_colour: "grape",
    fancy: 0,
    cool: 0,
    eccentric: 1,
    camouflage: -1,
    set: nil,
    category:  "socks",
    img: "basicSocks",
  },
  {
    id: 5,
    name: "Green Socks",
    description: "Cozy socks. They're quite green.",
    colour: "lime",
    accent_colour: "pine",
    fancy: 0,
    cool: 1,
    eccentric: 0,
    camouflage: 0,
    set: nil,
    category:  "socks",
    img: "basicSocks",
  },

])

puts "Clothes created!"

puts "Creating users..."

User.destroy_all

users = User.create!([
  {
    id: 1,
    username: "Olly",
    password: "ver",
    x_coordinate: 3,
    y_coordinate: 3,
    clothes: [5, 3, 1],
  },
])

puts "Users created!"

puts "Owning Clothes for user: #{User.find_by( id: 1 ).username}..."

# Creates owned clothes for the test user Olly (id #1)

OwnedArticle.destroy_all

owned_articles = OwnedArticle.create!([
  {
    user_id: 1,
    clothing_article_id: 1,
    number_held: 1,
  },
  {
    user_id: 1,
    clothing_article_id: 2,
    number_held: 2,
  },
  {
    user_id: 1,
    clothing_article_id: 3,
    number_held: 50,
  },
  {
    user_id: 1,
    clothing_article_id: 4,
    number_held: 1,
  },
  {
    user_id: 1,
    clothing_article_id: 5,
    number_held: 1,
  },
])

puts "Clothes owned!"