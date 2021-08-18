require 'pry'
def decode(ch)
  if ch == ' '
    return ' '
  end
  code = ch.ord
  if code >= "J".ord
    code = code - 1; 
  end 
  code = code - "A".ord;
  (code / 5 + 1).floor.to_s + (code % 5 + 1).floor.to_s;
end

def polybius(text)
  new_text = text.gsub(/[^0-9a-z ]/i, '')
  new_text.chars.map{ |c| decode(c)}.join
end
=begin 
PSC = {"A"=>11, "B"=>12, "C"=>13, "D"=>14, "E"=>15, "F"=>21, "G"=>22, "H"=>23, "I"=>24, "J"=>24,
       "K"=>25, "L"=>31, "M"=>32, "N"=>33, "O"=>34, "P"=>35, "Q"=>41, "R"=>42, "S"=>43, "T"=>44,
       "U"=>45, "V"=>51, "W"=>52, "X"=>53, "Y"=>54, "Z"=>55}

def polybius(t)
  t.gsub(/(\w)/) {PSC[$1]}
end
=end
binding.pry