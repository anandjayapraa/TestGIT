using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmpApi.Controllers
{
    public class EmployeesController : ApiController
    {
        public  IEnumerable<Employee> Get()
        {
            using (EmployeeDBEntities dbEntities = new EmployeeDBEntities())
            {
                return dbEntities.Employees.ToList();
            }
        }

        public Employee Get(string id)
        {
            using (EmployeeDBEntities dbEntities = new EmployeeDBEntities())
            {
                return dbEntities.Employees.FirstOrDefault(item => item.code == id);
                
            }
        }

    }
}
