﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _8.Triangle_Area
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = double.Parse(Console.ReadLine());
            var h = double.Parse(Console.ReadLine());
            var area = a * h / 2;
            Console.WriteLine("Triangle area = {0}", Math.Round(area, 2)); ///variant 1 for rounding
            Console.WriteLine("Triangle area = {0:F2}", area);             ///variant 2 for rounding
        }
    }
}
