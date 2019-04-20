using System;
using System.IO;
using System.Collections.Generic;

namespace WordPlay
{
    class Program
    {
        static List<String> palin = new List<String>();
        static List<String> notpalin = new List<String>();
        static int totalChars = 0;
        static String whole = "";
        static void Main(string[] args)
        {

            foreach (String s in args)
            {
                totalChars += s.Length;
                if (palindrome(s) == true) palin.Add(s);
                else notpalin.Add(s);
                for (int i = 0; i < s.Length; i++)
                {
                    if (s[i] >= 'A' && s[i] <= 'z') whole += s[i];
                }
            }
            logOut(new ConsoleLogger(), args);
            logOut(new FileLogger(),args);
           
        }


        public static void logOut(ILogger L, string[] args)
        {
            L.Log(args, palin, notpalin, palindrome(whole));
        }

        static Boolean palindrome(String s)
        {
            for (int i = 0; i <= (s.Length + 1) / 2 - 1; i++)
            {
                //Console.WriteLine(s[i] + " " + (char)(s[s.Length - 1 - i] - 32));
                if (s[i] != s[s.Length - 1 - i] && s[i] != (char)(s[s.Length - 1 - i] + 32) && s[i] != (char)(s[s.Length - 1 - i] - 32)) return false;
            }
            return true;
        }

    }
}
