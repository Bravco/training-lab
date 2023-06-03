import 'package:app/utils.dart';
import 'package:flutter/material.dart';

// Pub
import 'package:cloud_firestore/cloud_firestore.dart';

// Model
import 'package:app/model/plan.dart';

// Data
import 'package:app/data/database.dart';

// Page
import 'package:app/page/plan.dart';

class PlansPage extends StatelessWidget {
  const PlansPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Plans")),
      body: StreamBuilder<List<Plan>>(
        stream: readPlans(),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return Text("Something went wrong! ${snapshot.error}");
          } else if (snapshot.hasData) {
            final List<Plan> plans = snapshot.data!;
            return ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              children: plans.map((plan) => Padding(
                padding: const EdgeInsets.symmetric(vertical: 16),
                child: InkWell(
                  onTap: () {
                    Navigator.of(context).push(MaterialPageRoute(builder: (context) => PlanPage(plan: plan)));
                  },
                  child: Ink(
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: Utils.secondaryBackgroundColor,
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              plan.title.toString(),
                              style: Utils.h3TextStyle(),
                            ),
                            const SizedBox(height: 8),
                            Text(
                              plan.description.toString(),
                              style: Utils.h5TextStyleAlt(),
                            ),
                          ],
                        ),
                        Column(
                          children: [
                            Row(
                              children: [
                                Icon(Icons.calendar_month, color: Utils.primaryColor),
                                const SizedBox(width: 4),
                                Text(
                                  plan.days != null ? plan.days!.length.toString() : "0",
                                  style: Utils.h4TextStyle(),
                                ),
                              ],
                            ),
                            const SizedBox(height: 8),
                            Row(
                              children: [
                                Icon(Icons.bolt, color: Utils.primaryColor),
                                const SizedBox(width: 4),
                                Text(
                                  Utils.totalPlanVolume(plan).toString(),
                                  style: Utils.h4TextStyle(),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              )).toList(),
            );
          } else {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
        },
      ),
    );
  }

  Stream<List<Plan>> readPlans() => DatabaseService.plansCollection()
    .snapshots()
    .map((snapshot) => snapshot.docs
      .map((doc) => Plan.fromJson((doc as QueryDocumentSnapshot<Map<String, dynamic>>).data())).toList());
}