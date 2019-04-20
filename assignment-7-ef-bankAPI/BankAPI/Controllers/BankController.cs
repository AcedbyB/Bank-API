using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BankAPI.Models;

namespace BankAPI.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class BankController : ControllerBase
    {
        int id = 0;

        public BankController() {
            using (var db = new BankContext())
            {
                List<BankAccount> bankAccounts = db.checkingAccounts.ToList<BankAccount>();
                if(bankAccounts.Count>0) id = bankAccounts.Last().Id;
                if(db.savingsAccounts.ToList<BankAccount>().Count>0)
                id = Math.Max(id,db.savingsAccounts.ToList<BankAccount>().Last().Id);
            }
        }
        // GET api/values
        [HttpGet("api/accounts")]
        public ActionResult<List<BankAccount>> GetAllAccounts()
        {
            using (var db = new BankContext())
            {
                List<BankAccount> bankAccounts = db.checkingAccounts.ToList<BankAccount>();
                bankAccounts.AddRange(db.savingsAccounts.ToList<BankAccount>());
                return bankAccounts;
            }
        }

        [HttpGet("api/accounts/{id}")]
        public ActionResult<BankAccount> GetAuthorById(int id)
        {
            using (var db = new BankContext())
            {
                List<BankAccount> bankAccounts = db.checkingAccounts.ToList<BankAccount>();
                bankAccounts.AddRange(db.savingsAccounts.ToList<BankAccount>());
                return bankAccounts.Where(a => a.Id == id).First();
            }
        }

        [HttpPost("/api/accounts")]
        public ActionResult<BankAccount> CreateAccount([FromBody] BankAccount account)
        {
            if (!ModelState.IsValid) return BadRequest("Invalid Bank Account!");

            if (account.type == "Checking")
            {
                CheckingAccount newAcc = new CheckingAccount();
                newAcc.lastName = account.lastName;
                newAcc.firstName = account.firstName;
                newAcc.type = account.type;
                newAcc.Balance = account.Balance;
                id++;
                newAcc.Id = id;
                if (account.Balance < 200) newAcc.ApplyFee();
                using (var db = new BankContext())
                {
                    db.checkingAccounts.Add(newAcc);
                    db.SaveChanges();
                    return db.checkingAccounts.Last();
                }
            }
            else
            {
                SavingsAccount newAcc = new SavingsAccount();
                newAcc.lastName = account.lastName;
                newAcc.firstName = account.firstName;
                newAcc.type = account.type;
                newAcc.Balance = account.Balance;
                id++;
                newAcc.Id = id;
                if (account.Balance > 800) newAcc.ApplyInterest();
                using (var db = new BankContext())
                {
                    db.savingsAccounts.Add(newAcc);
                    db.SaveChanges();
                    return db.savingsAccounts.Last();
                }
            }
        }


        [HttpGet("api/accounts/{id}/deposit/{amount}")]
        public ActionResult<BankAccount> DepositAmount(int id, int amount)
        {
            using (var db = new BankContext())
            {
                List<BankAccount> bankAccounts = db.checkingAccounts.ToList<BankAccount>();
                bankAccounts.AddRange(db.savingsAccounts.ToList<BankAccount>());
                var account = bankAccounts.Where(a => a.Id == id).First();
                account.Deposit(amount);
                db.SaveChanges();
                return account;
            }
        }

        [HttpGet("api/accounts/{id}/withdrawal/{amount}")]
        public ActionResult<BankAccount> WithdrawAmount(int id, int amount)
        {
            using (var db = new BankContext())
            {
                List<BankAccount> bankAccounts = db.checkingAccounts.ToList<BankAccount>();
                bankAccounts.AddRange(db.savingsAccounts.ToList<BankAccount>());
                var account = bankAccounts.Where(a => a.Id == id).First();
                if (account.Balance < amount)
                {
                    return BadRequest("You don't have enough money!");
                }
                account.Withdraw(amount);
                db.SaveChanges();
                return account;
            }
        }
    }
}
