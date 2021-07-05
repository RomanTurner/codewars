=begin
Move the first letter of each word to the end of it,
then add "ay" to the end of the word. 
Leave punctuation marks untouched.

Examples
pig_it('Pig latin is cool') # igPay atinlay siay oolcay
pig_it('Hello world !')     # elloHay orldway !   
=end


    def pig_it text
  # ...
    end 

    class Piglatin

        def initialize(sentance)
         @sentance = sentance.split(' ') 
        end

        def piginit
         @sentance.each do |word|
            first = word[0]
            last = word[-1]
            if is_punctuation?(first) && is_punctuation?(last)
                word[0] = last
                word[-1] = add_ay(first)
            end
          end
        end

        def add_ay(letter)
         letter + 'ay'
        end 

        private 

        def is_punctuation?(letter)
         letter.match(/[[:punct:]]/)
        end

    end



  # check if everything is punctuation 
  # cut the first letter off
  # append ay to the end and then the punctuation

