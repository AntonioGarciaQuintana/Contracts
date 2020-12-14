using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ContractsApplication.Util
{

    public static class ApiResult
    {
        public static string GetStructure<T>(bool state, T data, string message = "")
        {
            var result = new { 
             Status = state,
             Data = data,
             Message = message
            };

            return JsonConvert.SerializeObject(result, Formatting.Indented);
        }
    }
}