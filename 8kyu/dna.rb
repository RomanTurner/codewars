=begin
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

Example: (input: output)

DNA_strand ("ATTGC") # return "TAACG"

DNA_strand ("GTAT") # return "CATA"
=end
require 'pry'
def DNA_strand(dna)
  result = ''
  dna.each_char do |el| 
    case el
    when 'T'
        result << 'A'
    when 'A'
        result << 'T'
    when 'C'
        result << 'G'
    when 'G'
        result << 'C' 
    else 
        break   
    end
  end
  result
end

puts DNA_strand('TA')
puts DNA_strand('GT')
puts DNA_strand('GATACA')

 #binding.pry

 def DNA_strand(dna)
  dna.gsub(/[ATGC]/, "A" => "T", "T" => "A", "C" => "G", "G" => "C")
end

def DNA_strand(dna)
  dna.tr('ATCG','TAGC')
end