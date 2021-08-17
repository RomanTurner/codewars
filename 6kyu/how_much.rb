require 'pry'

def how_much(m, n)
  min, max = [m, n].minmax
  results = []
    while min <= max
      car_quotient = min.divmod(9)
      boat_quotient = min.divmod(7)
      if car_quotient[1] == 1 && boat_quotient[1] == 2
        results << ["M: #{min}", "B: #{boat_quotient[0]}", "C: #{car_quotient[0]}"]
      end 
      min = min + 1
    end
 results
end

how_much(1, 100)
binding.pry