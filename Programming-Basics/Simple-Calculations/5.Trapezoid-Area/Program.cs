﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5.Trapezoid_Area
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Основа b1 = ");
            var b1 = double.Parse(Console.ReadLine());
            Console.Write("Основа b2 = ");
            var b2 = double.Parse(Console.ReadLine());
            Console.Write("Височина h = ");
            var h = double.Parse(Console.ReadLine());
            Console.WriteLine("Лицето на трапеца е = "+(b1 + b2) * h / 2);

        }
    }
}
