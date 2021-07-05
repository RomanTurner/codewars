=begin
Move the first letter
of each word to the end of it,
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
         @sentance[0].is_punctuation?
        end

        def add_ay(word)
         word + 'ay'
        end 

        private 

        def is_punctuation?(word)
         word[0].match(/[[:punct:]]/)
        end

    end



  # check if everything is punctuation 
  # cut the first letter off
  # append ay to the end and then the punctuation

