using System;
using System.Collections.Generic;
namespace WordPlay
{
    public class ConsoleLogger: ILogger
    {
        public override void Log(string[] args, List<String> palin, List<String> notpalin, Boolean flag) {
            
            int totalChars = 0;
            foreach(String s in notpalin) totalChars +=  s.Length;
            
            foreach(String s in palin) totalChars +=  s.Length;
                
            Console.WriteLine("Sum of input words: " + args.Length);
            Console.WriteLine("Sum of all characters in input: " + totalChars);
            Console.Write("Palindromes: ");
            foreach(String s in palin) {
                totalChars +=  s.Length;
                Console.Write(s + " ");
            }
            Console.WriteLine();
            Console.Write("Not Palindromes: ");
            foreach(String s in notpalin) {
                totalChars +=  s.Length;
                Console.Write(s + " ");
            }
            Console.WriteLine();
            if(flag == true) Console.WriteLine("That was a multiple words palindrome.");
            else Console.WriteLine("That wasn't a multiple words palindrome.");
        }

    }
}