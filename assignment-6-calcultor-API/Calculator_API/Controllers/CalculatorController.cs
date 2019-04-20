using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;

namespace Calculator_API.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {


        [HttpGet("api/plus")]
        public ActionResult<int> Plus(int a, int b)
        {
            return a + b;
        }

        [HttpGet("api/subtract")]
        public ActionResult<int> Subtract(int a, int b)
        {
            return a - b;
        }

        [HttpGet("api/multiply")]
        public ActionResult<long> Multiply(int a, int b)
        {
            return (long)a * b;
        }

        [HttpGet("api/divide")]
        public ActionResult<double> Divide(double a, double b)
        {
            if (b == 0) return BadRequest("b can't be zero UwU");
            return (double)a / b;
        }

        [HttpGet("api/abs")]
        public ActionResult<double> abs(double a)
        {
            return Math.Abs(a);
        }

        [HttpGet("api/lotto")]
        public ActionResult<List<int>> Lotto(int num, int cap)
        {
            List<int> res = new List<int>();
            Random rand = new Random();
            for (int i = 1; i<= num; i++) {
                int a = rand.Next(cap);
                res.Add(a);
            }
            res.Sort();
            return res;
        }
    }

}