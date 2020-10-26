using ContractsApplication.Models;
using ContractsApplication.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ContractsApplication.Controllers
{
    public class ContractController : Controller
    {
        private readonly IContractService ContractService;

        public ContractController(IContractService contractService)
        {
            ContractService = contractService;
        }


        [HttpPost]
        [Route("")]
        public JsonResult SaveContract(Contracts model)
        {
            try {
                if (!ModelState.IsValid)
                {
                    return Json("Modelo inválido: " + ModelState, JsonRequestBehavior.AllowGet);
                }

                ContractService.SaveOrUpdateContract(model);
            } catch (Exception e) {
                return Json(false, JsonRequestBehavior.AllowGet);
            }
    
            return Json(true, JsonRequestBehavior.AllowGet);
        }
        // GET: Contract
        public ActionResult Index()
        {
            return View();
        }
    }
}