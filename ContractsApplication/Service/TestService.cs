using ContractsApplication.Models;
using ContractsApplication.Repository;
using ContractsApplication.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContractsApplication.Service
{
    public class TestService : ITestService
    {
        private readonly IUnitOfWork UnitWork;

        public TestService(IUnitOfWork unitWork)
        {
            UnitWork = unitWork;
        }

        public IList<Test> GetAll()
        {
            return UnitWork.GetRepository<Test>().GetAll().ToList();
        }
    }
}