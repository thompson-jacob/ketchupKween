json.extract! art, :id, :title, :url, :description, :format, :created_at, :updated_at
json.url art_url(art, format: :json)
