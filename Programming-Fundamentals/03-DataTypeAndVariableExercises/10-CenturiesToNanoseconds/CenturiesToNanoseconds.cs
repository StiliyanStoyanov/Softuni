﻿using System;

namespace _10_CenturiesToNanoseconds
{
    class CenturiesToNanoseconds
    {
        static void Main(string[] args)
        {
            {
                byte centuries = byte.Parse(Console.ReadLine());
                ulong years = (ulong)(centuries * 100);
                ulong days = (ulong)(years * 365.2422);
                ulong hours = days * 24;
                ulong minutes = hours * 60;
                ulong seconds = (ulong)minutes * 60;
                decimal milliseconds = seconds * 1000;
                decimal microseconds = milliseconds * 1000;
                decimal nanoseconds = microseconds * 1000;

                Console.WriteLine($"{centuries} centuries = {years} years = {days} days = {hours} hours = {minutes} minutes = {seconds} seconds = {milliseconds} milliseconds = {microseconds} microseconds = {nanoseconds} nanoseconds");
            }
        }
    }
}
