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
    name: "White T-shirt",
    description: "A cozy and clean white t-shirt",
    colour: "cloud",
    fancy: 1,
    cool: 1,
    eccentric: -1,
    camouflage: -1,
    set: nil,
    hat: false,
    face_upper: false,
    face_lower: false,
    neck: false,
    body_upper: true,
    body_lower: true,
    arm_upper: true,
    arm_lower: false,
    hand_left: false,
    hand_right: false,
    jacket: false,
    legs_upper: false,
    legs_lower: false,
    socks: false,
    shoes: false,
    img: "https://www.torontotees.com/wp-content/uploads/2022/09/men-shirt.png"
  },
  {
    name: "Black T-shirt",
    description: "A cozy and clean white t-shirt",
    colour: "space",
    fancy: 0,
    cool: 1,
    eccentric: -1,
    camouflage: 1,
    set: nil,
    hat: false,
    face_upper: false,
    face_lower: false,
    neck: false,
    body_upper: true,
    body_lower: true,
    arm_upper: true,
    arm_lower: false,
    hand_left: false,
    hand_right: false,
    jacket: false,
    legs_upper: false,
    legs_lower: false,
    socks: false,
    shoes: false,
    img: "https://dixxon.ca/cdn/shop/products/dixxon-perfect-blank-tee-black-1_1200x1200.png?v=1680554505"
  },
])

puts "Clothes created!"