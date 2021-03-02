using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class StudentDetail
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string code { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string firstName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string lastName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string address { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string gender { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string image { get; set; }
    }
}
