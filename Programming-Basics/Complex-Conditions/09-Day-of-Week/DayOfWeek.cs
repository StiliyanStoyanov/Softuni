﻿using System;

namespace _09_Day_of_Week
{
    class DayOfWeek
    {
        static void Main(string[] args)
        {
            var DayOfWeek = int.Parse(Console.ReadLine());
            switch (DayOfWeek)
            {
                case 1:
                    Console.WriteLine("Monday");
                    break;
                case 2:
                    Console.WriteLine("Tuesday");
                    break;
                case 3:
                    Console.WriteLine("Wednesday");
                    break;
                case 4:
                    Console.WriteLine("Thursday");
                    break;
                case 5:
                    Console.WriteLine("Friday");
                    break;
                case 6:
                    Console.WriteLine("Saturday");
                    break;
                case 7:
                    Console.WriteLine("Sunday");
                    break;
                case 8:
                    Console.WriteLine("error");
                    break;
                case -1:
                    Console.WriteLine("error");
                    break;
            }

        }
    }
}
