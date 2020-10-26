using ContractsApplication.Repository;
using ContractsApplication.Service;
using ContractsApplication.Service.Interfaces;
using System.Web.Mvc;
using Unity;
using Unity.Mvc5;

namespace ContractsApplication
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            container.RegisterType<IUnitOfWork, UnitOfWork>();
            container.RegisterType<ITestService, TestService>();
            container.RegisterType<IContractService, ContractService>();
            // e.g. container.RegisterType<ITestService, TestService>();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}