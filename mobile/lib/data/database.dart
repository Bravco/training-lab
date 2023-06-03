// Pub
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

class DatabaseService {
  static CollectionReference usersCollection() {
    return FirebaseFirestore.instance.collection("users");
  }

  static DocumentReference userDoc() {
    return usersCollection().doc(FirebaseAuth.instance.currentUser!.uid);
  }

  static CollectionReference plansCollection() {
    return userDoc().collection("plans");
  }

  static DocumentReference planDoc(String planId) {
    return plansCollection().doc(planId);
  }
}