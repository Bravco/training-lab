import 'package:app/utils.dart';
import 'package:flutter/material.dart';

// Model
import 'package:app/model/plan.dart';

// Data
import 'package:app/data/database.dart';

class PlanPage extends StatelessWidget {
  final Plan plan;

  const PlanPage({
    super.key,
    required this.plan,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(plan.title != null ? plan.title! : "Plan")),
      body: StreamBuilder<Plan>(
        stream: readPlan(),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return Text("Something went wrong! ${snapshot.error}");
          } else if (snapshot.hasData) {
            final Plan plan = snapshot.data!;
            if (plan.days != null) {
              return ListView.builder(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                itemCount: plan.days!.length,
                itemBuilder: (context, index) {
                  final day = plan.days![index];
                  return Padding(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    child: Container(
                      decoration: BoxDecoration(
                        color: Utils.secondaryBackgroundColor,
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: Column(
                          children: [
                            Text(
                              "#${index+1}",
                              style: Utils.h4TextStyle(color: Utils.primaryColor),
                            ),
                            if (day["workouts"] != null) ...day["workouts"].map((workout) => Padding(
                              padding: const EdgeInsets.all(8),
                              child: Container(
                                decoration: BoxDecoration(
                                  color: Utils.primaryBackgroundColor,
                                  borderRadius: BorderRadius.circular(16),
                                ),
                                child: Padding(
                                  padding: const EdgeInsets.all(8),
                                  child: Column(
                                    children: [
                                      Padding(
                                        padding: const EdgeInsets.all(8),
                                        child: Row(
                                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                          children: [
                                            Text(
                                              workout["title"],
                                              style: Utils.h2TextStyle(),
                                            ),
                                            Text(
                                              Utils.totalWorkoutVolume(workout).toString(),
                                              style: Utils.h2TextStyle(color: Utils.primaryColor, fontWeight: FontWeight.bold),
                                            ),
                                          ],
                                        ),
                                      ),
                                      Divider(color: Utils.textColorAlt),
                                      if (workout["exercises"] != null) ...workout["exercises"].map((exercise) => Padding(
                                        padding: const EdgeInsets.all(8),
                                        child: Row(
                                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                          children: [
                                            Expanded(
                                              child: Text(
                                                exercise["title"],
                                                style: Utils.h4TextStyle(fontWeight: FontWeight.normal),
                                                softWrap: true,
                                              ),
                                            ),
                                            Text(
                                              exercise["volume"].toString(),
                                              style: Utils.h4TextStyle(),
                                            ),
                                          ],
                                        ),
                                      )),
                                    ],
                                  ),
                                ),
                              ),
                            )).toList(),
                          ],
                        ),
                      ),
                    ),
                  );
                },
              );
            } else {
              return Container();
            }
          } else {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
        },
      ),
    );
  }

  Stream<Plan> readPlan() => DatabaseService.planDoc(plan.id)
    .snapshots()
    .map((snapshot) => Plan.fromJson((snapshot).data() as Map<String, dynamic>));
}