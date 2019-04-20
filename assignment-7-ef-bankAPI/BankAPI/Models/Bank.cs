using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using System;

namespace BankAPI.Models
{
    public class BankContext : DbContext
    {
        public DbSet<CheckingAccount> checkingAccounts { get; set; }
        public DbSet<SavingsAccount> savingsAccounts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=bank.db");
        }
    }

    public class BankAccount
    {
        [Required]
        public String lastName { get; set; }

        [Required]
        public String firstName { get; set; }

        [Required]
        public String type { get; set; }
        public int Id { get; set; }
        public decimal Balance { get; set; }

        public void Deposit(decimal amount)
        {
            this.Balance += amount;
        }

        public void Withdraw(decimal amount)
        {
            this.Balance -= amount;
        }
    }

    public class CheckingAccount : BankAccount
    {
        public decimal Fee { get; set; }
        public void ApplyFee()
        {
            Fee = 20;
            this.Withdraw(Fee);
        }
    }

    public class SavingsAccount : BankAccount
    {
        public decimal Interest { get; set; }
        public void ApplyInterest()
        {
            Interest = 10;
            this.Deposit(Interest);
        }
    }
}