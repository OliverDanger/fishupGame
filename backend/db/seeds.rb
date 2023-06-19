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
    description: "It's so fine it feels like dust when it's dry",
    melting_point: 255.55,
    base_value: 0.10,
    weight: 0.33,
    magnetic: false,
    hookable: false,
    netable: true,
  }
  {
    name: "Sea Glass",
    description: "It's so fine it feels like dust when it's dry",
    melting_point: 255.55,
    base_value: 0.10,
    weight: 0.33,
    magnetic: false,
    hookable: false,
    netable: true,
  }
])