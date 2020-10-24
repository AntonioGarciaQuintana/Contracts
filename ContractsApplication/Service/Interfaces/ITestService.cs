using ContractsApplication.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContractsApplication.Service.Interfaces
{
    public interface ITestService
    {
        IList<Test> GetAll();
    }
}
