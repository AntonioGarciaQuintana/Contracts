using ContractsApplication.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ContractsApplication.Context
{
    public class ModelContext : DbContext
    {

        public IDbSet<Test> Tests { get; set; }
        public IDbSet<Contracts> Contracts { get; set; }

        public ModelContext() : base(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString)
        {
        }

        public new void Dispose()
        {
            base.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}