# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_11_07_174724) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clothing_articles", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "colour"
    t.integer "fancy"
    t.integer "cool"
    t.integer "eccentric"
    t.integer "camouflage"
    t.boolean "set"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img"
    t.string "category"
  end

  create_table "inventories", force: :cascade do |t|
    t.integer "item_id"
    t.integer "user_id"
    t.integer "number_held"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_inventories_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.decimal "melting_point", precision: 8, scale: 2
    t.decimal "base_value", precision: 11, scale: 2
    t.decimal "weight", precision: 8, scale: 2
    t.boolean "magnetic", default: false
    t.boolean "hookable", default: true
    t.boolean "netable", default: false
  end

  create_table "outfits", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.integer "clothes", default: [], array: true
    t.index ["user_id"], name: "index_outfits_on_user_id"
  end

  create_table "owned_articles", force: :cascade do |t|
    t.integer "user_id"
    t.integer "clothing_article_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "number_held"
    t.index ["user_id"], name: "index_owned_articles_on_user_id"
  end

  create_table "owned_recipes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "recipe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_owned_recipes_on_user_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "item_1"
    t.integer "item_2"
    t.integer "item_3"
    t.integer "item_4"
    t.integer "item_5"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "result_item_id"
    t.integer "result_clothing_id"
  end

  create_table "tiles", force: :cascade do |t|
    t.integer "x"
    t.integer "y"
    t.integer "type_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "x_coordinate"
    t.integer "y_coordinate"
    t.integer "clothes", default: [], array: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
