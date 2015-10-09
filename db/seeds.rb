# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

benches = Bench.create([
  {description: "Painted Ladies", lat: 37.776507, lng: -122.433143},
  {description: "Asian Art Museum", lat: 37.779731 , lng: -122.416921},
  {description: "Baker Beach", lat: 37.793512 , lng: -122.483047},
  {description: "Lands End", lat: 37.785559 , lng: -122.508909 },
  {description: "Botancial Garden", lat: 37.766222 , lng: -122.466604 },
  ])
