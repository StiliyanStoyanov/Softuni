﻿using System;

namespace _09_CountTheIntegers
{
    class Program
    {
        static void Main(string[] args)
        {
            int counter = 0;

            try
            {
                while (true)
                {
                    int number = int.Parse(Console.ReadLine());
                    counter++;
                }
            }
            catch (Exception)
            {
                Console.WriteLine($"{counter}"); ;
            }
        }
    }
}
