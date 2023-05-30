class Plan {
  final String id;
  final String? title;
  final String? description;
  final List<dynamic>? days;

  Plan({
    this.id = "",
    this.title,
    this.description,
    this.days,
  });

  Map<String, dynamic> toJson() => {
    "id": id,
    "title": title,
    "description": description,
    "days": days,
  };

  static Plan fromJson(Map<String, dynamic> json) => Plan(
    id: json["id"],
    title: json["title"],
    description: json["description"],
    days: json["days"],
  );
}