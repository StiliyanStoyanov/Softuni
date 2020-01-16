﻿using System;

namespace _03_EnglishNameOfTheLastDigit
{
    class EnglishNameOfTheLastDigit
    {
        static void Main(string[] args)
        {
            long number = long.Parse(Console.ReadLine());
            string name = GetName(number);
            Console.WriteLine(name);
        }

        static string GetName(long number)
        {
            long lastDigit = number % 10;
            string name = "";
            switch (lastDigit)
            {
                case 1:
                    name = "one";
                    break;
                case 2:
                    name = "two";
                    break;
                case 3:
                    name = "three";
                    break;
                case 4:
                    name = "four";
                    break;
                case 5:
                    name = "five";
                    break;
                case 6:
                    name = "six";
                    break;
                case 7:
                    name = "seven";
                    break;
                case 8:
                    name = "eight";
                    break;
                case 9:
                    name = "nine";
                    break;
            }
            return name;
        }
    }
}
