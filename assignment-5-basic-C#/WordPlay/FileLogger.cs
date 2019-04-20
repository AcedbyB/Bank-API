using System;
using System.Collections.Generic;
using System.IO;
namespace WordPlay
{
    public class FileLogger : ILogger
    {

        public override void Log(string[] args, List<String> palin, List<String> notpalin, Boolean flag)
        {
            int totalChars = 0;

            using (StreamWriter w = new StreamWriter("log.txt"))
            {
                foreach (String s in notpalin) totalChars += s.Length;

                foreach (String s in palin) totalChars += s.Length;

                w.WriteLine("Sum of input words: " + args.Length);
                w.WriteLine("Sum of all characters in input: " + totalChars);
                w.Write("Palindromes: ");
                foreach (String s in palin)
                {
                    totalChars += s.Length;
                    w.Write(s + " ");
                }
                w.WriteLine();
                w.Write("Not Palindromes: ");
                foreach (String s in notpalin)
                {
                    totalChars += s.Length;
                    w.Write(s + " ");
                }
                w.WriteLine();
                if (flag == true) w.WriteLine("That was a multiple words palindrome.");
                else w.WriteLine("That wasn't a multiple words palindrome.");
            }
        }

    }
}