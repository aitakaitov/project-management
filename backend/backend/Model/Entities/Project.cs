namespace backend.Model.Entities
{
    public class Project : BaseEntity
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public DateTime? Due { get; set; }
        public ICollection<Task> Tasks { get; set; } = new List<Task>();
    }
}
