namespace ContractsApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addContractModelAndService : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.tblContracts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 150),
                        Acres = c.String(nullable: false, maxLength: 50),
                        Amount = c.Double(nullable: false),
                        Location = c.String(maxLength: 200),
                        StartDaTe = c.DateTime(nullable: false),
                        EndDate = c.String(nullable: false),
                        Phone = c.String(maxLength: 50),
                        Description = c.String(),
                        CreationDate = c.DateTime(nullable: false),
                        LastUpdate = c.DateTime(nullable: false),
                        IsDelete = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.tblContracts");
        }
    }
}
