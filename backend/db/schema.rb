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

ActiveRecord::Schema[7.0].define(version: 2023_06_16_194052) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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
    t.integer "hat"
    t.integer "face_upper"
    t.integer "face_lower"
    t.integer "neck"
    t.integer "body_upper"
    t.integer "body_lower"
    t.integer "hand_left"
    t.integer "hand_right"
    t.integer "legs_upper"
    t.integer "legs_lower"
    t.integer "socks"
    t.integer "shoes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_outfits_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
