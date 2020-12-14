using ContractsApplication.Models;
using ContractsApplication.Service.Interfaces;
using ContractsApplication.Util;
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
            try
            {
                if (!ModelState.IsValid)
                {
                    return Json(ApiResult.GetStructure(false, "", "Invalid model"), JsonRequestBehavior.AllowGet);
                }

                ContractService.SaveOrUpdateContract(model);
                return Json(ApiResult.GetStructure(true, "", "Model was saved successfully"), JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(ApiResult.GetStructure(false, "", e.Message), JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public JsonResult GetAllContracts()
        {
            var json = "";
            try
            {
                var result = ContractService.GetAllContracts();
                return Json(ApiResult.GetStructure(true, result), JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(ApiResult.GetStructure(false, "", e.Message), JsonRequestBehavior.AllowGet);
            }
        }
        // GET: Contract
        public ActionResult Index()
        {
            return View();
        }
    }
}