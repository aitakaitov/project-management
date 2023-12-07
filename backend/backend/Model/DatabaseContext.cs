using backend.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Model
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<Entities.Task> Tasks { get; set; }

        private const string CONNECTION_STRING = "Host=projects-db:5432;Database=dbo;Username=myuser;Password=password";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseNpgsql(CONNECTION_STRING, b => b.MigrationsAssembly("backend"));
        }
    }
}
