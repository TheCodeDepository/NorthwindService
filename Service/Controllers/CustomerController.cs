using NorthwindContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Service.Controllers
{
    public class CustomerController : ApiController
    {


        // GET: api/Customer
        public IEnumerable<Customer> Get()
        {
            using (NorthwindEntities db = new NorthwindEntities())
            {
                var tmp = db.Customers.Select(x => x).ToList();
                return tmp;

            }
        }

        // GET: api/Customer/5
        public Customer Get(string id)
        {
            using (NorthwindEntities db = new NorthwindEntities())
            {
                var tmp = db.Customers.Single(x => x.CustomerID == id);
                return tmp;
            }           
        }

        // POST: api/Customer
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Customer/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Customer/5
        public void Delete(int id)
        {
        }
    }
}
