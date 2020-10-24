using ContractsApplication.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ContractsApplication.Controllers
{
    public class HomeController : Controller
    {
        private readonly ITestService TestService;

        public HomeController(ITestService testService)
        {
            TestService = testService;
        }

        public ActionResult Index()
        {
            // ViewBag.Title = "Home Page";
            //return View();
            return new FilePathResult("~/Front/index.html", "text/html");
        }

        public JsonResult GetTests() {
            var result = TestService.GetAll();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}
