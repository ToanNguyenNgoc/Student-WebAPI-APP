using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class StudentDetailContext: DbContext
    {
        public StudentDetailContext(DbContextOptions<StudentDetailContext> options): base(options)
        {

        }
        public DbSet<StudentDetail> StudentDetails { get; set; }
    }
}
