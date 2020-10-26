using ContractsApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContractsApplication.Service.Interfaces
{
    public interface IContractService
    {
        void SaveOrUpdateContract(Contracts contract);
        void DeleteContract(int id);
        IQueryable GetAllContracts();
        Contracts GetContractById(int id);

    }
}
