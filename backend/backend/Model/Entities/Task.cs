namespace backend.Model.Entities
{
    public class Task : BaseEntity
    {
        public string? Name { get; set; }
        public DateTime? TimeCreated { get; set; }
    }
}
