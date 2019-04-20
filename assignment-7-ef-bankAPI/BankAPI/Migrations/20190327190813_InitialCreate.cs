using Microsoft.EntityFrameworkCore.Migrations;

namespace BankAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "checkingAccounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    lastName = table.Column<string>(nullable: false),
                    firstName = table.Column<string>(nullable: false),
                    type = table.Column<string>(nullable: false),
                    Balance = table.Column<decimal>(nullable: false),
                    Fee = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_checkingAccounts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "savingsAccounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    lastName = table.Column<string>(nullable: false),
                    firstName = table.Column<string>(nullable: false),
                    type = table.Column<string>(nullable: false),
                    Balance = table.Column<decimal>(nullable: false),
                    Interest = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_savingsAccounts", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "checkingAccounts");

            migrationBuilder.DropTable(
                name: "savingsAccounts");
        }
    }
}
