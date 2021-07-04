=begin
    Task
The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they belong.

If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

Examples
r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "NY 5643") --> "NY 5643:/"

    
=end
require 'pry'
def travel(r, zipcode)
 r_split = r.split(",")
 addresses = r_split.inject({}){ |acc, curr|
    zip = "#{curr[2]} #{curr[3]}"
    acc[zip] ? acc[zip] << ", #{curr[0,-9]}" : acc[zip] = "#{zip}: #{curr[0,-9]}"
}
binding.pry
addresses[zipcode]
end

travel 



def travel(r, zipcode)
   Itinerary.new(r).travel(zipcode)  
end

class Itinerary
  
  attr_reader :lookup
  
  def initialize(r)
    @r = r.split(",")
    make_lookup
  end
  
  def make_lookup
  
    @lookup = Hash.new { |hash, key| hash[key] = {streets:[], nbs:[]} }
    @r.each do | address |
      nb, street, zip = chop_address(address)
      @lookup[zip][:streets].push( street )
      @lookup[zip][:nbs].push( nb )
    end
   
  end

  def travel(zipcode)

    zip_list = @lookup[zipcode]
    "#{zipcode}:#{zip_list[:streets].join(',')}/#{zip_list[:nbs].join(',')}"
    
  end
  
private

  def chop_address( address )
    
     zip = address[-8..-1]
     first_space = address.index(" ")
     nb = address[0...first_space]
     street = address[first_space + 1..-10]
     [nb, street, zip]
     
  end
  
end