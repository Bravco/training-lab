import 'package:flutter/material.dart';

// Pub
import 'package:cloud_firestore/cloud_firestore.dart';

// Model
import 'package:app/model/plan.dart';

// Data
import 'package:app/data/database.dart';

class PlansPage extends StatelessWidget {
  const PlansPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: StreamBuilder<List<Plan>>(
        stream: readPlans(),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return Text("Something went wrong! ${snapshot.error}");
          } else if (snapshot.hasData) {
            final List<Plan> plans = snapshot.data!;
            return ListView(
              children: plans.map((plan) => ListTile(
                title: Text(plan.title.toString()),
                subtitle: Text(plan.description.toString()),
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