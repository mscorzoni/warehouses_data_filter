require 'csv'

csv_options = {col_sep: ',', headers: :first_row }
filepath = 'db/data/warehouses.csv'

CSV.foreach(filepath, csv_options) do |row|
  Warehouse.create!(
                    internal_id: row['id'],
                    name: row['name'],
                    location: row['location'],
                    latitude: row['lat'].to_f,
                    longitude: row['lon'].to_f,
                    rating: row['rating'].to_f,
                    temperature: row['temperature'],
                    capacity_sq_ft: row['capacity_sq_ft'].to_i
                    )
end

puts 'Parsed CSV to db'